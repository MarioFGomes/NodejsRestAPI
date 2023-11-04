import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
import User from '../models/User';

class LoginController {
  async login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) return res.status(401).json({ errors: ['invalid credentials'] });
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ errors: ['Invalid email'] });
    const result = await bcrypt.compare(password, user.password);
    if (!result) return res.status(401).json({ errors: ['Invalid Password'] });
    const { id } = user;
    const token = Jwt.sign({ id, email }, process.env.TokenSecret, {
      expiresIn: process.env.TokenDuration,
    });
    return res.json({ token });
  }
}

export default new LoginController();
