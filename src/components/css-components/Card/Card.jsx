import React from "react";
import { BadgeProduct, BadgeRating } from "../Badge/Badge.jsx";
import { ButtonLike } from "../Buttons/Button.jsx";

export const CardOffer = ({
  cardClassName,
  prodURL,
  imgURL,
  title,
  description,
  discount,
}) => {
  return (
    <div className={`card card-shadow card-img-zoom ${cardClassName}`}>
      <a href={prodURL}>
        <section className="card-img">
          <img src={imgURL} alt="products Offer Img" />
        </section>
        <section className="card-details">
          {title && <div className="card-title">{title}</div>}
          {discount && <div className="card-discount">{discount}</div>}
          {description && <div className="card-description">{description}</div>}
        </section>
      </a>
    </div>
  );
};

export const CardProductItem = ({ item }) => {
  const { prodName, prodDesc } = item.prod;
  const { currPrice, origPrice, discount, discountText } = item.price;
  const { avgRatings } = item.ratings;
  const { tagName, badgeBgColor, showBadge } = item.badge;
  const { imgURL } = item.images;
  return (
    <div className={`card card-shadow prod-card`}>
      <div className="prod-card-top">
        <div className="btn-wishlist-wrapper">
          <ButtonLike />
        </div>
        {showBadge && (
          <div className="prod-badge-wrapper">
            <BadgeProduct tag={tagName} backgroundColor={badgeBgColor} />
          </div>
        )}
        <div className={`card-img`}>
          <img src={imgURL} alt="" />
        </div>
        <div className="prod-card-rating-wrapper">
          <BadgeRating rating={avgRatings} />
        </div>
      </div>
      <div className={`prod-card-details`}>
        <div className={`card-title`}>{prodName}</div>
        <div className={`card-description`}>{prodDesc}</div>
        <div className={`card-price`}>
          <span className="card-price-curr">Rs. {currPrice}</span>
          {discount && (
            <>
              <span className="card-price-orig">Rs.{` ${origPrice}`}</span>
              <span className="card-discountPercentage">{discountText}</span>
            </>
          )}
        </div>
      </div>
      <div className={`prod-card-buttons`}></div>
    </div>
  );
};
