import React, { Component, form } from "react";
import "./contact.css";

function contact() {
  return (

    <div className="container">
      <form className="form-contact">
      <ul class="flex-outer">
        <li>
      <label>
      <input type="text" name="name" placeholder="Name"/>
      </label>
      </li>
      <li>
        <label>
      <input type="email" name="email" placeholder="Email"/>
      </label>
      </li>
      <li>
           <label>
          <textarea type="text" name="message" placeholder="Message"/>
      </label>
      </li>
   
      <input type="submit" value="Submit" />
      </ul>
      </form>
    </div>
  )
}


export default contact;