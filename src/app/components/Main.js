import React from "react";
import Card from "./shared/Card";
import "../styles/Main.scss";

const galeryData = [
  {
    image: "../images/image1",
    name: "«Рождение Венеры» Сандро Боттичелли",
    price: {
      currentPrice: "1 000 000 $",
      previousPrice: "2 000 000 $",
    },
    inStock: true,
    key: 1,
  },
  {
    image: "../images/image2",
    name: "«Тайная вечеря»  Леонардо да Винчи",
    price: {
      currentPrice: "3 000 000 $",
      previousPrice: "",
    },
    inStock: true,
    key: 2,
  },
  {
    image: "../images/image3",
    name: "«Сотворение Адама» Микеланджело",
    price: {
      currentPrice: "5 000 000 $",
      previousPrice: "6 000 000 $",
    },
    inStock: true,
    key: 3,
  },
  {
    image: "../images/image4",
    name: "«Урок анатомии»  Рембрандт",
    price: {
      currentPrice: "",
      previousPrice: "",
    },
    inStock: false,
    key: 4,
  },
];

function Main() {
  return (
    <div className="main container">
      <h1>Картины эпохи Возрождения </h1>
      <div className="main__content --flex">
        {galeryData.map((galery) => {
          return (
            <Card
              image={galery.image}
              name={galery.name}
              previousPrice={galery.price.previousPrice}
              currentPrice={galery.price.currentPrice}
              key={galery.key}
              inStock={galery.inStock}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;
