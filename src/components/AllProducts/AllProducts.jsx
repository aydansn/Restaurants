import bread from "../../assets/images/bread.png";
import React from "react";
import style from "./AllProducts.module.css";

const AllProducts = () => {
  return (
    <div>
      <div className={style.next}>
        <div className={style.allNext}>
          <div className={style.allBowl}>
            <div className={style.mesafe}>
              <div className={style.veggie}>
                <div className={style.yanYanashi}>
                  <h3 className={style.menuAdi}>Breakfast Bowl </h3>
                  <p className={style.menuPrice}>$8.50</p>
                </div>
                <p className={style.menuTitle}>
                  Black Bean Cake, Greens, Tomato & Avocado Pico drizzled with
                  Lime Cream (Add egg $1)
                </p>
              </div>
              <div className={style.veggie}>
                <div className={style.yanYanashi}>
                  <h3 className={style.menuAdi}>EGG SANDWICH </h3>
                  <p className={style.menuPrice}>$7.50</p>
                </div>
                <p className={style.menuTitle}>
                  Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion,
                  Basil Pesto, Arugula
                </p>
              </div>
              <div className={style.veggie}>
                <div className={style.yanYanashi}>
                  <h3 className={style.menuAdi}>BREAKFAST BURRITO </h3>
                  <p className={style.menuPrice}>$9.50</p>
                </div>
                <p className={style.menuTitle}>
                  Three Scrambled Eggs, Cheddar, our Housemade Black Bean Cake,
                  Avocado, Pico, & Lime Cream
                </p>
              </div>
              <div>
                <img className={style.bread} src={bread} alt="bread" />
              </div>
            </div>
            <hr />
            <div className={style.mesafe}>
              <div className={style.veggie}>
                <div className={style.yanYanashi}>
                  <h3 className={style.menuAdi}>VEGGIE JAMMIE</h3>
                  <p className={style.menuPrice}>$5.50</p>
                </div>
                <p className={style.menuTitle}>
                  Everything Bagel with our Homemade Tofu Herb Spread, Cucumber
                  Tomato, Red Onion, & Arugula
                </p>
              </div>
              <div className={style.veggie}>
                <div className={style.yanYanashi}>
                  <h3 className={style.menuAdi}>BAGEL WITH CREAM CHEESE </h3>
                  <p className={style.menuPrice}>$6.50</p>
                </div>
                <p className={style.menuTitle}>
                  Plain, Cranberry, or Everything
                </p>
              </div>
              <div className={style.veggie}>
                <div className={style.yanYanashi}>
                  <h3 className={style.menuAdi}>Breakfast Bowl </h3>
                  <p className={style.menuPrice}>$8.50</p>
                </div>
                <p className={style.menuTitle}>
                  Black Bean Cake, Greens, Tomato & Avocado Pico drizzled with
                  Lime Cream (Add egg $1)
                </p>
              </div>
              <div className={style.veggie}>
                <div className={style.yanYanashi}>
                  <h3 className={style.menuAdi}>Breakfast Bowl </h3>
                  <p className={style.menuPrice}>$8.50</p>
                </div>
                <p className={style.menuTitle}>
                  Black Bean Cake, Greens, Tomato & Avocado Pico drizzled with
                  Lime Cream (Add egg $1)
                </p>
              </div>
            </div>
            <hr />
            <div className={style.mesafe}>
              <div className={style.veggie}>
                <div className={style.yanYanashi}>
                  <h3 className={style.menuAdi}>Breakfast Bowl </h3>
                  <p className={style.menuPrice}>$8.50</p>
                </div>
                <p className={style.menuTitle}>
                  Black Bean Cake, Greens, Tomato & Avocado Pico drizzled with
                  Lime Cream (Add egg $1)
                </p>
              </div>
              <div className={style.veggie}>
                <div className={style.yanYanashi}>
                  <h3 className={style.menuAdi}>Breakfast Bowl </h3>
                  <p className={style.menuPrice}>$8.50</p>
                </div>
                <p className={style.menuTitle}>
                  Black Bean Cake, Greens, Tomato & Avocado Pico drizzled with
                  Lime Cream (Add egg $1)
                </p>
              </div>
              <div className={style.veggie}>
                <div className={style.yanYanashi}>
                  <h3 className={style.menuAdi}>Breakfast Bowl </h3>
                  <p className={style.menuPrice}>$8.50</p>
                </div>
                <p className={style.menuTitle}>
                  Black Bean Cake, Greens, Tomato & Avocado Pico drizzled with
                  Lime Cream (Add egg $1)
                </p>
              </div>
              <div className={style.veggie}>
                <div className={style.yanYanashi}>
                  <h3 className={style.menuAdi}>Breakfast Bowl </h3>
                  <p className={style.menuPrice}>$8.50</p>
                </div>
                <p className={style.menuTitle}>
                  Black Bean Cake, Greens, Tomato & Avocado Pico drizzled with
                  Lime Cream (Add egg $1)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
