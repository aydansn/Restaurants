import React from "react";
import style from "./AboutUs.module.css";
import soup from "../../assets/images/soup.png";
import shef1 from "../../assets/images/shef1.png";
import shef2 from "../../assets/images/shef2.png";
import shef3 from "../../assets/images/shef3.png";
import shef4 from "../../assets/images/shef4.png";
import shef5 from "../../assets/images/shef5.png";
import shef6 from "../../assets/images/shef6.png";

const AboutUs = () => {
  return (
    <div className={style.who}>
      <div className={style.allAbot}>
        <div className={style.leftAbout}>
          <h2 className={style.us}>About Us</h2>
          <h1 className={style.are}>Who Are We?</h1>
          <p className={style.chain}>
            We are a chain of theme restaurant founded in 1971 in London. In
            1979, the cafe began covering its walls with rock and roll
            memorabilia, a tradition which expanded to others in the chain.
          </p>
          {/* <button className={style.learn}>LEARN MORE</button> */}
          <div className={style.allShef}>
            <div className={style.uchluShef}>
              <div className={style.imgText}>
                <img className={style.sheflers} src={shef1} alt="shef1" />
                <h3 className={style.gorder}>Gordon Ramsey</h3>
                <h5 className={style.owner}>Owner & Founder</h5>
              </div>
              <div className={style.imgText}>
                <img className={style.sheflers} src={shef2} alt="shef2" />
                <h3 className={style.gorder}>Gordon Ramsey</h3>
                <h5 className={style.owner}>Owner & Founder</h5>
              </div>
              <div className={style.imgText}>
                <img className={style.sheflers} src={shef3} alt="shef3" />
                <h3 className={style.gorder}>Gordon Ramsey</h3>
                <h5 className={style.owner}>Owner & Founder</h5>
              </div>
            </div>
            <div className={style.uchluShef}>
              <div className={style.imgText}>
                <img className={style.sheflers} src={shef4} alt="shef1" />
                <h3 className={style.gorder}>Gordon Ramsey</h3>
                <h5 className={style.owner}>Owner & Founder</h5>
              </div>
              <div className={style.imgText}>
                <img className={style.sheflers} src={shef5} alt="shef2" />
                <h3 className={style.gorder}>Gordon Ramsey</h3>
                <h5 className={style.owner}>Owner & Founder</h5>
              </div>
              <div className={style.imgText}>
                <img className={style.sheflers} src={shef6} alt="shef3" />
                <h3 className={style.gorder}>Gordon Ramsey</h3>
                <h5 className={style.owner}>Owner & Founder</h5>
              </div>
            </div>
          </div>
        </div>
        <img className={style.soup} src={soup} alt="soup" />
      </div>
    </div>
  );
};

export default AboutUs;
