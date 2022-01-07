// importing libraries
import React from "react";
import aboutmeImage from "../../data/img/aboutme.jpg";
// import aboutme from "./Aboutme.css";

// functionality start from here
const Aboutme = (props) => {
  let pageName = "About me";
  return (
    <>
      <div className="heading">
        <h2>{pageName}</h2>
      </div>
      <div className="content">
        <div>
          <h3>I'm a Full Stack Web Developer</h3>
          <p>
            Experienced Full Stack Software Engineer with 3+ years of
            professional experiance as MERN Stack Web developer at Accenture
            Advance Technology Centre having experiance on up to date advance
            web development technologies Angular, Node.js, ExpressJS, MongoDB,
            SQL-Server, GIT, Heroku, Web Sockets, Socket.io, ES6, JavaScript,
            Code Java, Bootstrap, CSS3, HTML5, AJAX, JSON, Amazon Web Services,
            Azure.
            <br />
            <br />
            To enjoy a long term challenge and a rewarding position in a
            growth-oriented organisation which put value on people ,the product
            they promote and offer diverse job responsibility which allow me to
            utilize my ability to the fullest.
          </p>
        </div>
        <div className="img">
          <img src={aboutmeImage} alt="../../data/img/aboutme.png" />
        </div>
      </div>
    </>
  );
};

// exporting the fnctionality
export default Aboutme;
