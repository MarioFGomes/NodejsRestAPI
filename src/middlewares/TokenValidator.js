import Jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ errors: ['Login required'] });
    const [, token] = authorization.split(' ');
    const result = Jwt.verify(token, process.env.TokenSecret);
    const { id, email } = result;
    const user = User.findOne({
      where: {
        id,
        email,
      },
    });
    if (!user) return res.status(401).json({ errors: ['User Invalid'] });
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({ errors: ['Token expired or Invalid'] });
  }
};
