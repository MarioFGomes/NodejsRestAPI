import bcrypt from 'bcrypt';
import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = {
        nome: req.body.nome,
        email: req.body.email,
        password: req.body.password,
      };

      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(novoUser.password, salt);
      novoUser.password = hash;
      console.log(novoUser.password);
      const result = await User.create(novoUser);
      const { id, nome, email } = result;
      return res.json({ success: true, message: 'Ok', data: { id, nome, email } });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const user = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(user);
    } catch (e) {
      return res.status(400).json({ message: 'Error to find user' });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) return res.status(404).json({ errors: ['user not found'] });
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: ['user not exist'] });
    }
  }

  async update(req, res) {
    try {
      const id = req.userId;
      if (!id) return res.status(400).json({ errors: ['Invalid request'] });
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ errors: ['user not found'] });
      const result = await User.update(
        {
          nome: req.body.nome,
          email: req.body.email,
        },
        {
          where: {
            id,
          },
        },
      );
      return res.status(204).json({ success: true, message: 'updated user', data: result });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ errors: ['something went wrong'] });
    }
  }

  async delete(req, res) {
    try {
      const id = req.userId;
      if (!id) return res.status(400).json({ errors: ['Invalid request'] });
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ errors: ['user not found'] });
      await User.destroy({
        where: {
          id,
        },
      });

      return res.status(204).json({ success: true, message: 'user deleted with success' });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ errors: ['something went wrong'] });
    }
  }
}

export default new UserController();
