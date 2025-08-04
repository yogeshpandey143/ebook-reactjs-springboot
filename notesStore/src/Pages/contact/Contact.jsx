import React from "react";
import "./Contact.css";
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";
const Contact = () => {
  return (
    <>
      <form className="contact-form">
        <TitleTypeOne
          TitleTop={"Get in touch with us"}
          Title={"Contact Us"}
          className={"books-title"}
        />

        <p className="contact-subtitle">
          Have questions or need support? We're here to help!
          <br />
          Whether you're looking for product details, need technical assistance,
          or want to partner with us — feel free to reach out.
        </p>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="name">Your Name</label>
            <input type="text" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Your Email</label>
            <input type="email" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>

    <div className="contact-map">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.3547195250228!2d83.1977574934497!3d25.02281532028049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e43dae07e3fa1%3A0xd01459c8066e5f76!2sRaghunathpur%2C%20Uttar%20Pradesh%20232103!5e0!3m2!1sen!2sin!4v1754299581852!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
