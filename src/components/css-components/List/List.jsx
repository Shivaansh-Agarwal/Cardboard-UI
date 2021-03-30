import React from "react";

export const ListSimple = ({ itemList }) => {
  return (
    <>
      <ul className="list-bullets">
        {itemList.map((item, index) => {
          return (
            <li key={index} className="li-simple">
              {item.text}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const ListOfferBullet = ({ itemList }) => {
  return (
    <>
      <ul className="list-bullets">
        {itemList.map((item, index) => {
          return (
            <li key={index} className="li-offer">
              {item.text}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const StackedList1 = ({ itemList, isBorder = true }) => {
  return (
    <>
      <ul className="list-group">
        {itemList.map((item, index) => {
          return (
            <li
              className="list-group-item"
              key={index}
              style={{ borderWidth: isBorder ? "1px" : "0px" }}
            >
              {item.text}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const StackedList2 = ({ itemList, isBorder = true }) => {
  return (
    <>
      <ul className="list-group">
        {itemList.map((item, index) => {
          return (
            <li
              className="list-group-item"
              key={index}
              style={{ borderWidth: isBorder ? "1px" : "0px" }}
            >
              <input type="checkbox" value="" className="list-checkbox" />
              {item.text}
            </li>
          );
        })}
      </ul>
    </>
  );
};
