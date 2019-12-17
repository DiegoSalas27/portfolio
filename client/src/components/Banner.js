import React, { useState, useEffect } from "react";
import axios from "axios";
import classnames from "classnames";

function Banner() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState({
    data: {
      error: {
        email: "",
        subject: "",
        text: "",
        message: ""
      }
    }
  });

  useEffect(() => {
    // console.log(error);
    // if (error.data.error.message !== "") {
    //   alert(1);
    // }
  }, [error]);

  function sendEmail(e) {
    e.preventDefault();
    const messenger = {
      from: email,
      subject: subject,
      text: body
    };

    axios
      .post("/sendEmail", messenger)
      .then(response => {
        console.log(response);
        setError(response);
      })
      .catch(error => console.error("Error:", error));
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
                      "is-invalid": error.data.error.email
                    })}
                    placeholder="Enter you email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  {error.data.error.email && (
                    <div className="invalid-feedback">
                      {error.data.error.email}
                    </div>
                  )}
                </div>
                <div className="form-g">
                  <input
                    type="text"
                    className={classnames({
                      "is-invalid": error.data.error.subject
                    })}
                    placeholder="Enter subject"
                    name="subject"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                  />
                  {error.data.error.subject && (
                    <div className="invalid-feedback">
                      {error.data.error.subject}
                    </div>
                  )}
                </div>
                <div className="form-g">
                  <textarea
                    style={{ height: "300px" }}
                    type="text"
                    className={classnames({
                      "is-invalid": error.data.error.subject
                    })}
                    placeholder="Enter message"
                    name="body"
                    value={body}
                    onChange={e => setBody(e.target.value)}
                  />
                  {error.data.error.subject && (
                    <div className="invalid-feedback">
                      {error.data.error.subject}
                    </div>
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
