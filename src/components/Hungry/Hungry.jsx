import React from "react";
import style from "./Hungry.module.css";
import fri from "../../assets/images/fri.png";
import { Link } from "react-router-dom";

const Hungry = () => {
  return (
    <div className={style.big}>
      <div className={style.allHung}>
        <div className={style.yanYanaHung}>
          <img className={style.fri} src={fri} alt="fri" />
          <div className={style.texts}>
            <h3 className={style.hungry}>Hungry?</h3>
            <h1 className={style.delivery}>We will home deliver !</h1>
            <Link to={`/contact`}>
              {" "}
              <button style={{ cursor: "pointer" }} className={style.order}>
                MAKE AN ORDER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hungry;
