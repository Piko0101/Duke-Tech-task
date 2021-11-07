import React, { useState, useEffect } from "react";
import Card from "./shared/Card";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import "../styles/Main.scss";
import axios from "axios";

const galeryData = [
  {
    image: image1,
    name: "«Рождение Венеры» Сандро Боттичелли",
    price: {
      currentPrice: "1 000 000 $",
      previousPrice: "2 000 000 $",
    },
    inStock: true,
    key: 1,
    inCart: false,
    isLoading: false,
  },
  {
    image: image2,
    name: "«Тайная вечеря»  Леонардо да Винчи",
    price: {
      currentPrice: "3 000 000 $",
      previousPrice: "",
    },
    inStock: true,
    key: 2,
    inCart: false,
  },
  {
    image: image3,
    name: "«Сотворение Адама» Микеланджело",
    price: {
      currentPrice: "5 000 000 $",
      previousPrice: "6 000 000 $",
    },
    inStock: true,
    key: 3,
    inCart: false,
  },
  {
    image: image4,
    name: "«Урок анатомии»  Рембрандт",
    price: {
      currentPrice: "",
      previousPrice: "",
    },
    inStock: false,
    key: 4,
    inCart: false,
  },
];

function Main() {
 
  const [data, setData] = useState(galeryData);
  const addToCartHandler = (product) => {
      fetch("https://reqres.in/api/products/3")
        .then((res) => {
          console.log(res);
          product.inCart = true;
          const newData = [...data];
          for (let key in data) {
            if (product.key === key) {
              newData.push(product);
            }
          }
          setData(newData);
        })
  };

  return (
    <div className="main container">
      <h1>Картины эпохи Возрождения </h1>
      <div className="main__content --flex">
        {data.map((product) => {
          return (
            <Card
              image={product.image}
              name={product.name}
              previousPrice={product.price.previousPrice}
              currentPrice={product.price.currentPrice}
              key={product.key}
              inStock={product.inStock}
              onClick={addToCartHandler}
              product={product}
              inCart={product.inCart}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;
