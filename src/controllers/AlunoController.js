import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    try {
      const aluno = await Aluno.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'Datanascimento'],
        order: [['ID', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['originalname', 'filename', 'url'],
        },
      });
      return res.json({ success: true, message: 'Ok', data: aluno });
    } catch (e) {
      return res.status(400).json({ message: 'Error to find user' });
    }
  }

  async store(req, res) {
    try {
      const { nome, sobrenome, Datanascimento } = req.body;
      const result = await Aluno.create({ nome, sobrenome, Datanascimento });
      return res.json({ success: true, message: 'Ok', data: result });
    } catch (e) {
      return res.status(400).json({ message: 'error when trying to save student' });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(404).json({ errors: ['Invalid request'] });
      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'Datanascimento'],
        order: [['ID', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['originalname', 'filename', 'url'],
        },
      });
      if (!aluno) return res.status(404).json({ errors: ['student not found'] });

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({ errors: ['student not exist'] });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['Invalid request'] });
      const aluno = await Aluno.findByPk(id);
      if (!aluno) return res.status(404).json({ errors: ['student not found'] });
      const result = await Aluno.update(
        {
          nome: req.body.nome,
          sobrenome: req.body.sobrenome,
          Datanascimento: req.body.Datanascimento,
        },
        {
          where: {
            id,
          },
        },
      );
      return res.status(204).json({ success: true, message: 'updated student', data: result });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ errors: ['something went wrong'] });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['Invalid request'] });
      const aluno = await Aluno.findByPk(id);
      if (!aluno) return res.status(404).json({ errors: ['student not found'] });
      await Aluno.destroy({
        where: {
          id,
        },
      });

      return res.status(204).json({ success: true, message: 'student deleted with success' });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ errors: ['something went wrong'] });
    }
  }
}

export default new AlunoController();
