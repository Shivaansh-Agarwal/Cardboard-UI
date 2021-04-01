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

export const GridDualColumns = ({ itemsList }) => {
  return (
    <table className="grid-2-cols">
      {itemsList.map((item, index) => {
        return (
          <tr key={index} className="grid-2-cols-row">
            <td className="grid-2-cols-title">{item.title}</td>
            <td className="grid-2-cols-text">{item.text}</td>
          </tr>
        );
      })}
    </table>
  );
};
