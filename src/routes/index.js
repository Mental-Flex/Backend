const { Router } = require("express");

const publicationsRoutes = require("./publicationsRoutes")
const categoryRoutes = require("./categoryRoutes")
const testimonialsRoutes = require("./testimonialsRoutes")
const paymentRoutes = require("./paymentRoutes")

const authRoutes = require("./authRoutes");
const ordersRoutes = require('./ordersRoutes')

const router = Router();


router.use("/auth", authRoutes);
router.use("/publications", publicationsRoutes);
router.use("/category", categoryRoutes);
router.use("/testimonials", testimonialsRoutes);
router.use("/payment", paymentRoutes);
router.use("/orders", ordersRoutes);


module.exports = router;