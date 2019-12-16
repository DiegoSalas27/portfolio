const nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
  host: "smtp.googlemail.com", // Gmail Host
  port: 465, // Port
  secure: true,
  auth: {
    user: "dominicsc2hs@gmail.com",
    pass: "Kingdedede2013@"
  }
});

function validateInputs(email, subject, text) {
  let mensaje = {};
  if (email !== "") {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase()) !== true) {
      mensaje["email"] = "You must enter a valid email";
    }
  } else {
    mensaje["email"] = "You must enter an email";
  }

  if (subject === "") {
    mensaje["subject"] = "You must enter a subject";
  }
  if (text === "") {
    mensaje["text"] = "You must enter a text";
  }

  return mensaje;
}

function sendMessage(req, res) {
  transport.sendMail(req.body, (err, info) => {
    const { from, subject, text } = req.body;
    if (
      Object.entries(validateInputs(from, subject, text)).length === 0 &&
      validateInputs(from, subject, text).constructor === Object
    ) {
      console.log("enviado");
      return res.status(200).json({
        error: {
          message: "Email sent!"
        }
      });
    } else {
      return res
        .status(200)
        .json({ error: validateInputs(from, subject, text) });
    }
  });
}

module.exports = (req, res) => {
  sendMessage(req, res);
};
