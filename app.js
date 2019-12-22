const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const i18next = require("i18next");
const i18nextMiddleware = require("i18next-express-middleware");
const Backend = require("i18next-node-fs-backend");

i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: {
      loadPath: __dirname + "/locales/{{lng}}/{{ns}}.json",
      addPath: __dirname + "/locales/{{lng}}/{{ns}}.missing.json"
    },
    fallbackLng: "en",
    preload: ["en", "es"],
    saveMissing: true
  });

app.use(i18nextMiddleware.handle(i18next));

const emailRoute = require("./api/email");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/sendEmail", emailRoute);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
