import React from "react";

const ContactUs = () => {
    return(
<section className="section-contact">
      <div className="wrapper">
        <div className="photo-big-3">
          <img src="./img/pngCard/Burana-Tower.jpg" alt="" />
        </div>
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-container">
         

          <form action="#" method="post" className="form-container">
            <div className="form-group-name">
              <div className="form-grup-item">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="form-grup-item">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="form-group-addresss">
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className="form-group-message">
              <div className="col-md-12">
                <textarea
                  className="form-control textarea"
                  placeholder="Write your message."
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="form-group-button">
              <div>
                <input type="submit" className="form-btn" value="Send Message" />
              </div>
            </div>
          </form>

          <div className="address">
            <h3 className="address-title">Contact Info</h3>
            <ul className="contact-list">
              <li className="contact-list-item">
                <span className="d-block text-black">Address:</span>
                <span>34 Street Name, City Name Here, United States</span>
              </li>
              <li className="contact-list-item">
                <span className="d-block text-black">Phone:</span
                ><span>+1 242 4942 290</span>
              </li>
              <li className="contact-list-item">
                <span className="d-block text-black">Email:</span
                ><span>info@yourdomain.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section> 
    )
}

export default ContactUs;