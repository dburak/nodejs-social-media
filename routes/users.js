const router = require("express").Router();


router.get("/", (req, res) => {
  res.send("hello from users router")
})


module.exports = router