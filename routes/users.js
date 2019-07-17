var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const { key } = req.query;
  const rawData = await redisClient.getAsync(key);
  console.log('rawData', rawData)
  return res.json(JSON.parse(rawData));
});

module.exports = router;
