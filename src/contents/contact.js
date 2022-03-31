import React from "react";
import coffee from "../images/undraw_getting_coffee_re_f2do.svg";
import "../styles/contact.css";
const Contact = () => {
  return (
    <div className="container-contact">
      <div>
        <img className="img-contact" src={coffee} />
      </div>

      <h1>Let's have a coffe!</h1>
      <p>zejulio3@hotmail.com</p>
    </div>
  );
};

export default Contact;
