import React from "react";
import scss from "./Footer.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
const Footer = () => {
  return (
    <footer>
      <div className={scss.footer}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.blocks}>
              <div className={scss.block}>
                <h2>OFFERS AND TRENDS</h2>
                <h1>Newsletter Application</h1>
                <p>
                  Enter your email address and let us notify you about news and
                  discounts...
                </p>
                <div className={scss.signUp}>
                  <input type="text" />
                  <button>SIGN UP</button>
                </div>
              </div>
              <div className={scss.block}>
                <h2>STAY UP TO DATE</h2>
                <h1>Follow Us</h1>
                <p>
                  Become part of our friends on social networks and find out
                  first about the discounts and novelties that we announce...
                </p>
                <div className={scss.social}>
                  <InstagramIcon className={scss.icon} />
                  <FacebookRoundedIcon className={scss.icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
