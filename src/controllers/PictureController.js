import multer from 'multer';
import multerConfig from '../config/multer';

import Picture from '../models/Picture';

const upload = multer(multerConfig).single('picture');

class PictureController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      const { originalname, filename } = req.file;
      const { student_id } = req.body;
      const picture = await Picture.create({ originalname, filename, student_id });

      return res.json(picture);
    });
  }
}

export default new PictureController();
