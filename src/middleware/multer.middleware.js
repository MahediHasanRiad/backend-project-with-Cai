import multer from "multer";

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (_req, file, cb) {
    // console.log('file path: ', file)
    cb(null, Date.now() + '-' + file.originalname);
  },
});

export const upload = multer({ storage: storage });
