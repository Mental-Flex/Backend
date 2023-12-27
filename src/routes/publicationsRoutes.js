const { Router } = require("express");
const {
  createPublicationHandler,
  getPublicationsHandler,
  getPublicationByIdHandler,
  deletePublicationByIdHandler,
  
} = require("../handlers/publicationsHandler");

const router = Router();

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const upload = multer({ storage: storage })



router.post("/", createPublicationHandler);
router.get("/", getPublicationsHandler);
router.get("/:idPublication", getPublicationByIdHandler);
router.delete("/:idPublication", deletePublicationByIdHandler);




module.exports = router;
