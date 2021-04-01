import React, { useEffect } from "react";
import hljs from "highlight.js";
import {
  CompPageTemplate,
  CompSectionTemplate,
} from "../CompPageTemplates.jsx";
import { CardOffer, CardProductItem } from "./Card.jsx";
import imgCardOffer1 from "./assets/imgCardOffer1.jpg";
import imgCardOffer2 from "./assets/imgCardOffer2.jpg";
import imgCardOffer3 from "./assets/imgCardOffer3.jpg";
import proditem1 from "./assets/proditem1.webp";

const CardUtility = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <CompPageTemplate
      pageHeading={"Card"}
      sections={[section1, section2, section3, section4]}
    />
  );
};
export default CardUtility;

const section1Preview = (
  <CardOffer
    title="Sun's out, Sheild on"
    description="Editor Approved Sunscreens"
    discount="50% off"
    imgURL={imgCardOffer1}
    prodURL=""
    cardClassName="card-offer-type1"
  />
);
const section1Code = `<CardOffer
    title="Sun's out, Sheild on"
    description="Editor Approved Sunscreens"
    discount="50% off"
    imgURL="https://abc.jpg"
    prodURL=""
    cardClassName="card-offer-type1"
/>`;
const section1 = CompSectionTemplate({
  sectionHeading: "Offer Card Type-1",
  sectionDesc: "",
  preview: section1Preview,
  code: section1Code,
});

const section2Preview = (
  <CardOffer
    title="Beauty Routine Finder"
    description="Skin, Hair & Wellness Regimes In A Minute"
    discount="10% off"
    imgURL={imgCardOffer2}
    prodURL=""
    cardClassName="card-offer-type2"
  />
);
const section2Code = `<CardOffer
    title="..."
    description="..."
    discount="..."
    imgURL="..."
    prodURL="..."
    cardClassName="card-offer-type2"
/>`;
const section2 = CompSectionTemplate({
  sectionHeading: "Offer Card Type-2",
  sectionDesc: "",
  preview: section2Preview,
  code: section2Code,
});

const section3Preview = (
  <CardOffer
    title="Lorem, ipsum."
    description="Lorem ipsum dolor sit amet."
    discount="Upto 20% off"
    imgURL={imgCardOffer3}
    prodURL=""
    cardClassName="card-offer-type3"
  />
);
const section3Code = `<CardOffer
    title="..."
    description="..."
    discount="..."
    imgURL="..."
    prodURL="..."
    cardClassName="card-offer-type3"
/>`;
const section3 = CompSectionTemplate({
  sectionHeading: "Offer Card Type-3",
  sectionDesc: "",
  preview: section3Preview,
  code: section3Code,
});

const dummyData = [
  {
    item: {
      id: "awkdkjl2ed-aelkaelk-2121",
      prod: {
        prodName: "Gabanna T-Shirt",
        prodDesc: "Men's Summer Slim Fit ada dwojdwj wjowd",
        brand: "Gabanna",
      },
      price: {
        currPrice: "16000",
        origPrice: "20000",
        discount: "20",
        discountText: "20% off",
        discountBadgeBgColor: "",
      },
      ratings: {
        avgRatings: "4.4",
        totalRatings: 95200,
      },
      images: {
        imgURL: proditem1,
      },
      badge: {
        tagName: "BESTSELLER",
        badgeBgColor: "orange",
        showBadge: true,
      },
    },
  },
];
const section4Preview = (
  <>
    <CardProductItem item={dummyData[0].item} />
  </>
);
const section4Code = `<CardProductItem item={data}/>

data={
  id: "awkdkjl2ed-aelkaelk-2121",
  prod: {
    prodName: "Gabanna T-Shirt",
    prodDesc: "Men's Summer Slim Fit ada dwojdwj wjowd",
    brand: "Gabanna",
  },
  price: {
    currPrice: "16000",
    origPrice: "20000",
    discount: "20",
    discountText: "20% off",
    discountBadgeBgColor: "",
  },
  ratings: {
    avgRatings: "4.4",
    totalRatings: 95200,
  },
  images: {
    imgURL: "https://assets.abc.jpg",
  },
  badge: {
    tagName: "BESTSELLER",
    badgeBgColor: "orange",
    showBadge: true,
  },
}
`;
const section4 = CompSectionTemplate({
  sectionHeading: "Product Card Item",
  sectionDesc: "",
  preview: section4Preview,
  code: section4Code,
});
