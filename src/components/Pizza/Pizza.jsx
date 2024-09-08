import React from "react";
import style from "./Pizza.module.css";
import { StarOutlined } from "@ant-design/icons";
import pizza from "../../assets/images/pizza2.png";

const Pizza = () => {
  return (
    <div className={style.allPizza}>
      <div className={style.allPizzas}>
        <div className={style.velgul}>"</div>
        <div className={style.starts}>
          <StarOutlined />
          <StarOutlined />
          <StarOutlined />
          <StarOutlined />
          <StarOutlined />
        </div>
        <p className={style.cafe}>
          Restaurant & Cafe, we aim at promoting the foodstuff industry through
          the branches , we establish and through the new dishes. and integrate
          between different cultures, by merging different Oriental and its
          western recipes
        </p>
        <h3 className={style.rich}>-Richard Hendriks</h3>
        <img className={style.qrag} src={pizza} alt="pizza" />
      </div>
    </div>
  );
};

export default Pizza;
