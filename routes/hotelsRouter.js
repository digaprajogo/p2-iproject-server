const express = require("express");
const HotelController = require("../controllers/HotelController");
const router = express.Router();

router.get("/", HotelController.getHotels);

module.exports = router;
