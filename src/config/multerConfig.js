import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);
export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
      return cb(new multer.MulterError('Invalid file'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'upload', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
