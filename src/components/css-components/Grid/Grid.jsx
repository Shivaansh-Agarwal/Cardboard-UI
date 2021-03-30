import React from "react";
import { CardProductItem } from "../Card/Card.jsx";

export const Grid = ({ productsList }) => {
  return (
    <div className="grid-products">
      {productsList.map((productData) => {
        return (
          <div key={productData.item.id} className="prod-grid-card-wrapper">
            <CardProductItem item={productData.item} />
          </div>
        );
      })}
    </div>
  );
};
