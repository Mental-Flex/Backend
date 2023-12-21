const { Router } = require("express");

const publicationsRoutes = require("./publicationsRoutes")
const categoryRoutes = require("./categoryRoutes")
const testimonialsRoutes = require("./testimonialsRoutes")
const paymentRoutes = require("./paymentRoutes")

const authRoutes = require("./authRoutes");

const router = Router();


router.use("/auth", authRoutes);
router.use("/publications", publicationsRoutes);
router.use("/category", categoryRoutes);
router.use("/testimonials", testimonialsRoutes);
router.use("/payment", paymentRoutes);


module.exports = router;