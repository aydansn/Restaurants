import React from "react";
import style from "./Cookies.module.css";
import bigImg from "../../assets/images/bigimg.jpg";
import kruasan from "../../assets/images/kruasan.jpg";
import oil from "../../assets/images/oil.jpg";
import burger from "../../assets/images/burger.jpg";
import poteto from "../../assets/images/poteto.jpg";
import beer from "../../assets/images/beer.jpg";
import shar from "../../assets/images/shar.jpg";

const Cookies = () => {
  return (
    <div className={style.allCok}>
      <div className={style.allcookies}>
        <div className={style.yanYanaCook}>
          <img className={style.big} src={bigImg} alt="bigImg" />
          <div className={style.allimg}>
            <div className={style.uchlu}>
              <img className={style.kru} src={kruasan} alt="kruasan" />
              <img className={style.kru} src={burger} alt="burger" />
              <img className={style.kru} src={poteto} alt="poteto" />
            </div>
            <div className={style.uchlu}>
              <img className={style.kru} src={oil} alt="oil" />
              <img className={style.kru} src={beer} alt="beer" />
              <img className={style.kru} src={shar} alt="shar" />
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Cookies;
