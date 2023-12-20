
const { createRoles } = require("./libs/initialSetUp");
const express = require("express");
const server = express();
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/index");
const multer = require("multer");
createRoles()


server.use(morgan("dev"));
server.use(express.urlencoded({ extended: false }));
server.use(cors());
//!DEPLOY server.use(cors(corsOptions));
server.use(express.json());
// server.use(fileUpload({
//     useTempFiles: true,
//     tempFileDir: './src/public/upload' // ./upload/
// }));

server.use("/", router);

module.exports = server;