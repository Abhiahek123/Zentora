import React from "react";
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="row footer py-5">
        <div className="col-sm-10 mx-auto">
          <div className="row">
             {/* coloum1 */}
            <div className="col-lg-3 col-md-6 col-12  p-4 text-dark">
              <h3 className="mb-4 fw-bold">
                <FaCheckCircle style={{ color: "#f2520d" }} /> Zent
                <span style={{ color: "#ee4a05" }}>tore</span>
              </h3>
              <p>
                Zentora-where talent Meets <br /> Opportunity. The Future of{" "}
                <br /> freelancing in here. Connect. <br /> Collaborate
                Earn{" "}
              </p>
              <p>
                <b>Add:</b> 70-80 Upper St Norwich NR2
              </p>
              <p>
                <b>Call:</b> +01235641231
              </p>
              <p>
                <b>Add:</b> hello@zentora.com
              </p>
            </div>

            {/* column2 */}

            <div className="col-lg-3 col-md-6 col-12 p-4 text-dark">
              <h4 className="fw-bold mb-4">Zentora Platform</h4>
              <p>About</p>
              <p>Browser Projects</p>
              <p>Find Freelancers</p>
              <p>Post a Projct</p>
              <p>How it Works</p>
              <p>Success Stories</p>
            </div>
             

             {/* column3 */}
            <div className="col-lg-3 col-md-6 col-12 p-4 text-dark">
              <h3 className="fw-bold mb-4">Links</h3>
              <Link to="/" className="linkfooter"> Contact Us</Link>
              <Link to="/" className="linkfooter">Gallery</Link>
              <Link to="/" className="linkfooter"> News & Articies</Link>
              <Link to="/" className="linkfooter">FAQ</Link>
              <Link to="/" className="linkfooter">Coming Soon</Link>
              <Link to="/" className="linkfooter">Sign In/Registratio</Link>
            </div>
             

             {/* column4 */}

            <div className="col-lg-3 col-md-6 col-12 p-4 text-dark">
              <h3 className="fw-bold mb-4">Contacts</h3>
              <p>
                Enter Your email address to register to our <br /> newsletter
                subscription
              </p>
              <div className="d-flex flex-column flex-sm-row gap-2">
                <input type="email" placeholder="Your email" className="form-control footerinput"/>
               <button className="btn btn-info">Subscribe</button>
              </div>

              <div className="iconfooter m-3">
                <CiFacebook className="me-3 facebookfooter" />
                <FaLinkedinIn className="me-3 linkedfooter" />
                <FaInstagram className="me-3 instagramfooter" />
                <FaTwitter className="me-3 twiterfooter" />
                <FaYoutube className="me-3 youtubefooter" />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright py-5">
          <p className="m-0 text-center">
            Copyright 2026
            <span className="text-info fw-bold"> Zentora </span>— Hire. Work.
            Grow. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
