var express = require("express");
var router = express.Router();
const redisClient = require('./redis-client');

router.get("/", async function (req, res, next) {
    const key = req.query.key
    const value = req.query.value;
    await redisClient.setAsync(key, value);
    res.send("API is working properly");
});

module.exports = router;
