import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

const multerS3Options = {
  s3: new AWS.S3(),
  acl: 'public-read',
  bucket: process.env.AWS_BUCKET,
  key(req, file, cb) {
    cb(null, file.originalname);
  },
};

const multerOptions = {
  storage: multerS3(multerS3Options),
};

const upload = multer(multerOptions).array('photos', 3);

const uploadPhotos = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res
        .status(500)
        .json({status: false, msg: 'Internal Server Error'});
    }
    return res.status(201).json({status: true, msg: 'Photos Saved'});
  });
};

export default {uploadPhotos};
