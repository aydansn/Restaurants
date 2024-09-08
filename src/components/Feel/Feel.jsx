import React from "react";
import style from "./Feel.module.css";

const Feel = () => {
  return (
    <div className={style.free}>
      <div className={style.allFeel}>
        <h1 className={style.drop}>Feel free to drop us a line!</h1>
        <p className={style.let}>
          Let's talk if you have any query or suggestion. We are open to learn
          from you. So don't hesitate to reach us anytime.
        </p>
      </div>
      <div className={style.yanYanaName}>
        <div className={style.solInput}>
            <input className={style.yours} type="text" placeholder="Your Name" />
            <input className={style.yours} type="text" placeholder="Subject" />
            <input className={style.yours} type="text" placeholder="Email Adress" />
            <div className={style.yanashi}>
            <input type="checkbox" className={style.check}  />
            <h3 className={style.copy}>Send me a Copy</h3>
            </div>
        </div>
        <div className={style.sagInput}>
          <input className={style.yours2} type="text" placeholder="Type your message here" />
          <button className={style.shot}>GIVE US A SHOT</button>
        </div>
      </div>
    </div>
  );
};

export default Feel;
