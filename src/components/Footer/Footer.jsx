import React from "react";
import pasta from "../../assets/images/pasta.png";
import style from "./Footer.module.css";
import logo from "../../assets/images/logo.png";
import { FacebookOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";
import { GooglePlusOutlined } from "@ant-design/icons";
import { LinkedinOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={style.allfooter}>
      <div className={style.footer}>
        <div className={style.leftfoot}>
          <img className={style.pasta} src={pasta} alt="pasta" />
          <div className={style.yemek}>
            {" "}
            <img className={style.logoIMG} src={logo} alt="logo" />
            <div className={style.want}>
              Want To Taste <br /> Our Food?
            </div>
            <Link to={`/contact`}>
              <button style={{ cursor: "pointer" }} className={style.order}>
                ORDER ONLINE
              </button>
            </Link>
          </div>
        </div>
        <div className={style.rightfoot}>
          <div className={style.about}>
            <ul>
              <h3>ABOUT</h3>
              <li className={style.dif}>About</li>
              <li>Services</li>
              <li>Careers</li>
              <li>Hire Us</li>
            </ul>
          </div>
          <div className={style.reseurces}>
            <ul>
              <h3>RESEURCES</h3>
              <li className={style.dif}>Terms</li>
              <li>Help</li>
              <li className={style.dif2}>Privacy</li>
              <div className={style.yanYana}>
                <FacebookOutlined />
                <InstagramOutlined />
                <GooglePlusOutlined />
                <LinkedinOutlined />
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.lastFoot}>
        <h4>Made With ♥ </h4>
      </div>
    </div>
  );
};

export default Footer;
