import React from "react";
import Button from "./Button";
import "../../styles/Card.scss";

function Card(props) {
  return (
    <div className={`card ${!props.inStock? `unavailable`: ``}`}>
      <div className="card__image">
        <img src={props.image} />
      </div>
      <div className="card__info">
        <p>{props.name}</p>
        {props.inStock? (<div className="card__actions --flex">
          <div className="card__price --flex">
            <span className="card__price-previous">{props.previousPrice}</span>
            <span className="card__price-current">{props.currentPrice}</span>
          </div>
          <Button className="button_main" children="Купить" />
        </div>) : (<p className="unavailable-text">Продана на аукционе</p>)}
        
      </div>
    </div>
  );
}

export default Card;
