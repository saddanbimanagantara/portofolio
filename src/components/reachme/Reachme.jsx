import React, { Component } from "react";
import "./Reachme.css";

class Reachme extends Component {
  render() {
    return (
      <div className="container">
        <div className="intro">
          <h2>Reach me!</h2>
          <p>Want to get in touch?</p>
          <p>Drop me a line</p>
        </div>
        {/* <div className="form-reachme">
          <form action="">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Enter your name"
              />
            </div>
            <div className=" form-group">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
              />
            </div>
            <div className=" form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                className="form-textarea"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button className="btn-reachme">Submit</button>
          </form>
        </div> */}
        <div className="reachmeother">
          <a href="mailto:saddanbimanagantara@gmail.com">
            <i class="ri-mail-line"></i>
            saddanbimanagantara@gmail.com
          </a>
          <a href="">
            <i className="ri-telegram-line"></i>
            csamazon
          </a>
          <a href="https://www.linkedin.com/in/saddan-bima-nagantara/">
            <i className="ri-linkedin-line"></i>
            Saddan Bima Nagantara
          </a>
          <a href="https://twitter.com/kanggitar11">
            <i className="ri-twitter-line"></i>
            Kanggitar11
          </a>
          <a href="https://www.instagram.com/bnagantarasys/">
            <i className="ri-instagram-line"></i>
            bnagantarasys
          </a>
        </div>
      </div>
    );
  }
}

export default Reachme;
