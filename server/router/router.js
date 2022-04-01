const express=require("express")
const router = express.Router();
const getWeather =require("./getWeather")
router.get("/getWeather",getWeather.getWeather)
module.exports = router;