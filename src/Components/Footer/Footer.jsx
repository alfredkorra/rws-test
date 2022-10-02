import React from "react";
import "./footer.scss";
import { footerdata } from "./footerdata";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <section>
      <div className="footer_container">
        {footerdata.map((item, i) => {
          return (
            <div className="links" key={i}>
              <ul>
                <button>
                  <BsTelephone />
                  <HiOutlineMail />
                </button>
                <span>{item.p}</span>
                <h4>{item.h4}</h4>
                <li>{item.li}</li>
                <li>{item.li1}</li>
                <li>{item.li2}</li>
                <li>{item.li3}</li>
                <li>{item.li4}</li>
              </ul>
            </div>
          );
        })}
      </div>

      <div className="copyright">
        <span>Copyright &copy; 2021 All rights reserved</span>
      </div>
      <div className="footer_btn">
        <button>Lorem ipsum dolor sit amet.</button>
      </div>
    </section>
  );
};

export default Footer;
