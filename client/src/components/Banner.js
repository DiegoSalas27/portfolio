import React, { useState, useEffect } from "react";
import axios from "axios";
import classnames from "classnames";

function Banner() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState({
    message: {
      email: "",
      subject: "",
      text: ""
    }
  });
  const [sent, setSent] = useState("");

  useEffect(() => {
    console.log(error);
  }, [error, sent]);

  async function sendEmail(e) {
    e.preventDefault();
    const loader = document.querySelector(".loader");
    const loaderText = document.querySelector(".loading-img");
    loaderText.innerHTML = "Seding email...";
    loader.classList.add("show");

    const messenger = {
      from: email,
      to: "mustafa14@ethereal.email",
      replyTo: email,
      subject: subject,
      text: body,
      html: `
      <h1>Messenger details</h1>
      <p> Email: ${email}</p>
      <h3>Message</h3>
      <p>${body}</p>
      `
    };

    try {
      const res = await axios.post("/sendEmail", messenger);
      setError({
        message: {
          email: "",
          subject: "",
          text: ""
        }
      });
      loaderText.innerHTML = "Email sent!";
      setTimeout(() => {
        loader.classList.remove("show");
      }, 2000);
    } catch (err) {
      loader.classList.remove("show");
      setError(err.response.data);
    }
    loader.classList.add("hidden");
  }

  return (
    <div className="banner">
      <div
        className={`jumbotron jumbotron-fluid index-banner mb-0`}
        style={{ paddingTop: "100px" }}
      >
        <div className="container-fluid px-4">
          <div className="row">
            <div className="col-md-6 text-light" style={{ float: "left" }}>
              <h1 className="display-4">Diego Salas Noain</h1>
              <p className="lead">Full Stack Developer.</p>
              <div className="icons">
                <a href="https://www.facebook.com/diego.salasnoain">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="https://www.facebook.com/diego.salasnoain">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/diego-salas-noain-b11837146/">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://github.com/DiegoSalas27">
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </div>
              <div className="short-bio">
                <p>
                  English teacher, Cook and passionate software developer. I am
                  a Full Stack web developer since 2018. I really enjoy the
                  feeling for desingning and coding and see the results coming
                  to life on the screen
                </p>
              </div>
            </div>
            <div className="col-md-6 right-menu text-light">
              <form onSubmit={sendEmail}>
                <h3 className="display-4 text-light">Wanna hire me?</h3>
                <p className="lead-email">Send me an email.</p>
                <div className="form-g">
                  <input
                    type="text"
                    className={classnames({
                      "is-invalid": error.message.email
                    })}
                    placeholder="Enter you email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  {error.message.email && (
                    <div className="invalid-feedback">
                      {error.message.email}
                    </div>
                  )}
                </div>
                <div className="form-g">
                  <input
                    type="text"
                    className={classnames({
                      "is-invalid": error.message.subject
                    })}
                    placeholder="Enter subject"
                    name="subject"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                  />
                  {error.message.subject && (
                    <div className="invalid-feedback">
                      {error.message.subject}
                    </div>
                  )}
                </div>
                <div className="form-g">
                  <textarea
                    style={{ height: "300px" }}
                    type="text"
                    className={classnames({
                      "is-invalid": error.message.text
                    })}
                    placeholder="Enter message"
                    name="body"
                    value={body}
                    onChange={e => setBody(e.target.value)}
                  />
                  {error.message.text && (
                    <div className="invalid-feedback">{error.message.text}</div>
                  )}
                </div>
                <input className="btn-send" type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
