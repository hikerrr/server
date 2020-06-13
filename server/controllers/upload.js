import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

let multerS3Options = {
  s3: new AWS.S3(),
  bucket: process.env.AWS_BUCKET,
  key: function(req,file,cb) {
    cb(null,file.originalname);
  }
};

let multerOptions = {
  storage: multerS3(multerS3Options)
};

let upload = multer(multerOptions).array('photos',3);

const uploadPhotos = (req,res) => {

  upload(req,res, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({status:false,msg:'Internal Server Error'});
    }
    console.log('Files saved');
    return res.status(201).json({status:true,msg:'Photos Saved'});
  });

};

export default {uploadPhotos};
