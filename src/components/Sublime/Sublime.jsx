import React from "react";
import style from "./Sublime.module.css";
import stake from "../../assets/images/stake.png";
import { Link } from "react-router-dom";

const Sublime = () => {
  return (
    <div className={style.Sublime}>
      <div className={style.allsub}>
        <div className={style.leftsub}>
          <img src={stake} alt="stake" />
        </div>
        <div className={style.rightsub}>
          <div className={style.before}>
            The Spectacle <strong>Before Us Was Indeed</strong> Sublime.
          </div>
          <p className={style.was}>
            Apparently, we had reached a great height in the atmosphere, for the
            sky was a dead black, and which lifts the horizon of the sea to the
            level of the spectator on a hillside.
          </p>
          <div className={style.yanYana2}>
            <Link to={`/contact`} className={style.btn1}>
              <button style={{ cursor: "pointer" }}>
                <strong>ORDER ONLINE</strong>
              </button>
            </Link>
            <Link to={`/location`} className={style.btn2}>
              <button style={{ cursor: "pointer" }}>
                <strong>OUR LOCATION</strong>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sublime;
