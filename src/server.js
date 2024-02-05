
const { createRoles } = require("./libs/initialSetUp");
const express = require("express");
const router = require("./routes/index");
const server = express();
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer"); 
const fileUpload = require('express-fileupload');
createRoles();

const storage = multer.diskStorage({
  destination: "./public/upload/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });
server.use(upload.single("image"));

const corsOptions = {
  origin: "https://www.mental-flex.com", 
};



server.use(morgan("dev"));
server.use(express.urlencoded({ extended: false }));
server.use(cors(corsOptions));


server.use(express.json());
// server.use(fileUpload({
//     useTempFiles: true,
//     tempFileDir: './src/public/upload' 
// }));

server.use("/", router);

module.exports = server;