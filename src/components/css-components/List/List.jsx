import React from "react";
import { CardProductItem } from "../Card/Card.jsx";

export const ListProducts = ({ productsList }) => {
  return (
    <div className="list-products">
      {productsList.map((productData) => {
        return (
          <div key={productData.item.id} className="prod-list-card-wrapper">
            <CardProductItem item={productData.item} />
          </div>
        );
      })}
    </div>
  );
};
