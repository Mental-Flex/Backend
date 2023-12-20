const { Router } = require("express");

const publicationsRoutes = require("./publicationsRoutes")
const categoryRoutes = require("./categoryRoutes")

const authRoutes = require("./authRoutes");

const router = Router();


router.use("/auth", authRoutes);
router.use("/publications", publicationsRoutes);
router.use("/category", categoryRoutes);

module.exports = router;