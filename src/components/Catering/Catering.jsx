import React from "react";
import style from "./Catering.module.css";
import pancake from "../../assets/images/pancake.png";

const Catering = () => {
  return (
    <div>
      <div className={style.allCatering}>
        <h2 className={style.Catering}>Catering</h2>
        <h1 className={style.manage}>We Manage Your Events</h1>
        <p className={style.allow}>
          Allow our Chef to deliver the perfect private dinner or cocktail party
          experience in your home; or let us simply add a little extra flavor to
          your next office meeting, boat trip, or beach picnic. By partnering
          with our sibling location Rosewater Wine & Spirits, we can offer a
          full array of bar services and beverage selections. Email us to learn
          more.
        </p>

        <div className={style.pankek}>
          <img className={style.cake} src={pancake} alt="pancake" />
          <div className={style.pankText}>
            <h4 className={style.cater}>We Cater in Weddings, Corporate Functions and Events</h4>
            {/* <button className={style.btncat}><strong>HIRE US NOW</strong></button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catering;
