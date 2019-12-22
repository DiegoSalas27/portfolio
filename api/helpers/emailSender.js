const nodemailer = require("nodemailer");

function validateInputs(email, subject, text, a, b, c, d) {
  let message = {};

  if (email !== "") {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase()) !== true) {
      message["email"] = a;
    }
  } else {
    message["email"] = b;
  }

  if (subject === "") {
    message["subject"] = c;
  }
  if (text === "") {
    message["text"] = d;
  }
  return message;
}

exports.sendEmail = function(req, res) {
  var lng = req.language;
  req.i18n.changeLanguage(lng);
  const a = req.t("app.ValidEmail");
  const b = req.t("app.EmptyEmail");
  const c = req.t("app.EmptySubject");
  const d = req.t("app.EmptyText");

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
    Object.entries(validateInputs(from, subject, text, a, b, c, d)).length ===
      0 &&
    validateInputs(from, subject, text, a, b, c, d).constructor === Object
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
      .json({ message: validateInputs(from, subject, text, a, b, c, d) });
  }
};
