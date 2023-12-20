import React from "react";
import { carsB } from "../../ClassB";
import Card from "../card/Card";
const CategoryB = () => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        // gap: "100px 50px",
        padding: "100px 50px",
      }}
    >
      {carsB.map((el) => (
        <Card el={el} key={el.id} />
      ))}
    </div>
  );
};

export default CategoryB;
