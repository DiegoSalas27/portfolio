const express = require("express");
const router = express.Router();
const message = require("./helpers/emailSender");

router.post("/", message.sendEmail);

module.exports = router;
