import React from "react";
import style from "./Contact.module.css";
import { Link } from "react-router-dom";
import {
  FlagOutlined,
  PhoneOutlined,
  PicCenterOutlined,
} from "@ant-design/icons";

const Contact = () => {
  return (
    <div className={style.mesafeler}>
      <div className={style.contact}>
        <h2 className={style.timig}>Location & Timing</h2>
        <h1 className={style.withUs}>Contact with us</h1>
      </div>
      <div className={style.allhour}>
        <div className={style.loc}>
          <div className={style.yanyanaLOc}>
            <FlagOutlined className={style.iconreng} />
            <p className={style.green}>
              Av. Paz Soldán 290, San Isidro, Lima 27 - Peru
            </p>
          </div>
          <div className={style.yanyanaLOc}>
            <PhoneOutlined className={style.iconreng} />
            <p className={style.green}>+511 442-2777</p>
          </div>
          <div className={style.yanyanaLOc}>
            <PicCenterOutlined className={style.iconreng} />
            <p className={style.green}>mail@restaurantpro.com</p>
          </div>
        </div>

        <div className={style.loc}>
          <div className={style.yanyanaLOc}>
            <p className={style.hours}>Hours of service</p>
          </div>
          <div className={style.yanyanaLOc}>
            <p className={style.monday}>Monday to Saturday</p>
            <p className={style.pm}>1:00 pm - 3:00 pm and</p>
            <p className={style.pm}>7:00 pm - 11:00 pm</p>
            <p className={style.monday}>Sunday</p>
            <p className={style.pm}>12:30 pm - 3:30 pm</p>
          </div>
        </div>

        <div className={style.loc}>
          <div className={style.yanyanaLOc}>
            <p className={style.tele}>Telephone support:</p>{" "}
          </div>
          <div className={style.yanyanaLOc}>
            <p>Monday to Saturday from</p>
          </div>
          <div className={style.yanyanaLOc}>
            <p> 9:00 am to 9:00 pm</p>
          </div>
          <Link style={{ cursor: "pointer" }} to={`/contact`}>
            <button style={{ cursor: "pointer" }} className={style.reserv}>MAKE A RESERVATION</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
