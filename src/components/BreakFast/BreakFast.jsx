import React, { useEffect, useState } from "react";
import style from "./BreakFast.module.css";
import { CustomerServiceOutlined } from "@ant-design/icons";
import { FullscreenExitOutlined } from "@ant-design/icons";
import { HighlightOutlined } from "@ant-design/icons";
import { BgColorsOutlined } from "@ant-design/icons";
import { DribbbleOutlined } from "@ant-design/icons";

import { Link, useSearchParams } from "react-router-dom";

const BreakFast = () => {
  const datas = [
    {
      name: "Breakfast Bowl",
      price: 8,
      title:
        "Black Bean Cake, Greens, Tomato & Avocado Pico drizzled with Lime Cream (Add egg $1)",
      type: "brealfast",
    },
    {
      name: "EGG SANDWICH",
      price: 8,
      title:
        "Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula",
      type: "brealfast",
    },
    {
      name: "BREAKFAST BURRITO",
      price: 7,
      title:
        "Three Scrambled Eggs, Cheddar, our Housemade Black Bean Cake, Avocado, Pico, & Lime Cream",
      type: "dinner",
    },
    {
      name: "VEGGIE JAMMIE",
      price: 8,
      title:
        "Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula",
      type: "lunch",
    },
    {
      name: "BREAKFAST BURRITO",
      price: 9,
      title:
        "Three Scrambled Eggs, Cheddar, our Housemade Black Bean Cake, Avocado, Pico, & Lime Cream",
      type: "lunch",
    },
    {
      name: "Fried egg",
      price: 3,
      title:
        "Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula",
      type: "desserts",
    },
    {
      name: "AVOCADO TOAST",
      price: 10,
      title:
        "Three Scrambled Eggs, Cheddar, our Housemade Black Bean Cake, Avocado, Pico, & Lime Cream",
      type: "desserts",
    },
    {
      name: "SMOKED SALMON BAGEL",
      price: 19,
      title:
        "Smoked Salmon, Capers, House Pickled Red Onions, & Cream Cheese served on a Toasted Bagel",
      type: "drinks",
    },
  ];

  let [searchParams] = useSearchParams();
  const tip = searchParams.get("type");
  console.log(tip, "TIP");

  const [butunMenu, setButunMenu] = useState(datas);
  console.log(butunMenu);

  useEffect(() => {
    if (tip === "all") {
      setButunMenu(datas);
    } else {
      const filterlenmishdata = datas.filter((data) => data.type === tip);
      setButunMenu(filterlenmishdata);
    }
  }, [tip]);

  return (
    <div className={style.allDinner}>
      <div className={style.allsection}>
        <div className={style.lanch}>
          <CustomerServiceOutlined />
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={"/menu?type=brealfast"}
          >
            BreakFast
          </Link>
        </div>
        <div className={style.breakFast}>
          <FullscreenExitOutlined />
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={"/menu?type=lunch"}
          >
            Lunch
          </Link>
        </div>
        <div className={style.breakFast}>
          <HighlightOutlined />
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={"/menu?type=dinner"}
          >
            Dinner
          </Link>
        </div>
        <div className={style.breakFast}>
          <BgColorsOutlined />
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={"/menu?type=desserts"}
          >
            Desserts
          </Link>
        </div>
        <div className={style.breakFast}>
          <DribbbleOutlined />
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={"/menu?type=drinks"}
          >
            Drinks
          </Link>
          <hr />
        </div>
      </div>
      <div>
        {butunMenu.map((menu, idx) => (
          <div className={style.next} key={idx}>
            <div className={style.allNext}>
              <div className={style.allBowl}>
                <div className={style.mesafe}>
                  <div className={style.veggie}>
                    <div className={style.yanYanashi}>
                      <div className={style.menuAdi}>{menu.name}</div>
                      <div className={style.menuPrice}>{menu.price}</div>
                    </div>
                    <div className={style.menuTitle}>{menu.title}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default BreakFast;
