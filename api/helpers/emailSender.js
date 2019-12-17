const nodemailer = require("nodemailer");

function validateInputs(email, subject, text) {
  let message = {};
  if (email !== "") {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase()) !== true) {
      message["email"] = "You must enter a valid email";
    }
  } else {
    message["email"] = "You must enter an email";
  }

  if (subject === "") {
    message["subject"] = "You must enter a subject";
  }
  if (text === "") {
    message["text"] = "You must enter a text";
  }
  return message;
}

exports.sendEmail = function(req, res) {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "mustafa14@ethereal.email",
      pass: "GTd2TkE3pFcsmQXqQg"
    }
  });

  const { from, subject, text } = req.body;
  if (
    Object.entries(validateInputs(from, subject, text)).length === 0 &&
    validateInputs(from, subject, text).constructor === Object
  ) {
    transporter.sendMail(req.body, (err, info) => {
      if (err) {
        console.log("ERROR!!!!!!", err);
      } else {
        console.log("sent!");
        return res.status(200).json({
          message: "Email sent!"
        });
      }
    });
  } else {
    return res
      .status(500)
      .json({ message: validateInputs(from, subject, text) });
  }
};
