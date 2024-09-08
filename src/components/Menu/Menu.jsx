import React from "react";
import style from "./Menu.module.css";
import banka from "../../assets/images/banka.png";
import juice from "../../assets/images/juice.png";
import sec from "../../assets/images/sec.jpg";
import sendvic from "../../assets/images/sendvic.png";

const Menu = () => {
  return (
    <div>
      <div className={style.allMenu}>
        <h3 className={style.menu}>Menu</h3>
        <h1 className={style.taste}>Taste Our Foods & Enjoy</h1>
        <div className={style.yemekler}>
          <img className={style.sec} src={sec} alt="" />
          <img className={style.sec} src={banka} alt="" />
          <img className={style.sec} src={sendvic} alt="" />
          <img className={style.sec} src={juice} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
