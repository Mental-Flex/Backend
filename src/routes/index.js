const { Router } = require("express");

const publicationsRoutes = require("./publicationsRoutes")
const categoryRoutes = require("./categoryRoutes")
const testimonialsRoutes = require("./testimonialsRoutes")

const authRoutes = require("./authRoutes");

const router = Router();


router.use("/auth", authRoutes);
router.use("/publications", publicationsRoutes);
router.use("/category", categoryRoutes);
router.use("/testimonials", testimonialsRoutes);

module.exports = router;