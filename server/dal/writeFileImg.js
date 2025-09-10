import { promises as fs } from "fs";
import pkg from 'multer';
const { multer } = pkg;

// לא עובד
async function multerImg(path) {
  const beforeData = await fs.readFile(path, "utf-8");
  const jsonData = JSON.parse(beforeData);
  console.log("img:" ,jsonData);
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public");
    },
    filename: function (req, file, cb) {
      cb(null, file.filename = jsonData.posts[jsonData.posts.length - 1].date);
    },
  });

  console.log("stroge",storage);

  const upload = multer({ storage: storage });

  console.log("upload", upload);

  return upload;
}

export default multerImg;
