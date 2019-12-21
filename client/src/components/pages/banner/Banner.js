import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import classnames from "classnames";

function Banner(props) {
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

  async function sendEmail(e) {
    e.preventDefault();
    const { loader, loaderImage } = props;
    loaderImage.current.innerHTML = "Seding email...";
    loader.current.classList.add("show");

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
      await axios.post("/sendEmail", messenger);
      setError({
        message: {
          email: "",
          subject: "",
          text: ""
        }
      });
      loaderImage.current.innerHTML = "Email sent!";
      setEmail("");
      setSubject("");
      setBody("");
      setTimeout(() => {
        loader.current.classList.remove("show");
      }, 2000);
    } catch (err) {
      loader.current.classList.remove("show");
      setError(err.response.data);
    }
    loader.current.classList.add("hidden");
  }

  return (
    <div className="banner">
      <div className={`jumbotron jumbotron-fluid index-banner mb-0`}>
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
                  Certified English teacher, cook and professional software
                  developer. I am a Full Stack web developer since 2018. I am
                  really passionate and enjoy the great outcomes from designing
                  and coding.
                </p>
              </div>
            </div>
            <div className="col-md-6 right-menu text-light">
              <form onSubmit={sendEmail}>
                <h3 className="display-6 text-light">
                  Currently available for employment opportunities
                </h3>
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
