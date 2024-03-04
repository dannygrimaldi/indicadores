import React from "react";
import "./Cards.css";
import Card from "../Card/Card";

const Cards = ({ data, uniqueData }) => {
  return (
    <div className="Cards">
      {data.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
              series2={card.series}
              uniqueData={uniqueData} // Pasando la prop data a Card
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
