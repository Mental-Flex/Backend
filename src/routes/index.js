const { Router } = require("express");

const publicationsRoutes = require("./publicationsRoutes")

const authRoutes = require("./authRoutes");

const router = Router();


router.use("/auth", authRoutes);
router.use("/publications", publicationsRoutes);

module.exports = router;