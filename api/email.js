const express = require("express");
const router = express.Router();
const message = require("./helpers/emailSender");

router.post("/", (req, res, next) => {
  message(req, res);
});

module.exports = router;
