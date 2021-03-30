import React, { useEffect } from "react";
import hljs from "highlight.js";
import {
  CompPageTemplate,
  CompSectionTemplate,
} from "../CompPageTemplates.jsx";
import { Grid } from "./Grid.jsx";
import {
  prodImg1,
  prodImg2,
  prodImg3,
  prodImg4,
  prodImg5,
  prodImg6,
  prodImg7,
  prodImg8,
  prodImg9,
  prodImg10,
} from "./assets";

const GridUtility = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return <CompPageTemplate pageHeading={"Grids"} sections={[section1]} />;
};
export default GridUtility;

const productsList = [
  {
    item: {
      id: "awkdkjl2ed-afwdw-2121",
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
        imgURL: prodImg1,
      },
      badge: {
        tagName: "BESTSELLER",
        badgeBgColor: "orange",
        showBadge: true,
      },
    },
  },
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
        imgURL: prodImg2,
      },
      badge: {
        tagName: "BESTSELLER",
        badgeBgColor: "orange",
        showBadge: true,
      },
    },
  },
  {
    item: {
      id: "awkdkjl2ed-aelkaesslk-2121",
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
        imgURL: prodImg3,
      },
      badge: {
        tagName: "BESTSELLER",
        badgeBgColor: "orange",
        showBadge: true,
      },
    },
  },
  {
    item: {
      id: "awkdkjl2ed-aelkaesslk-21121",
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
        imgURL: prodImg4,
      },
      badge: {
        tagName: "BESTSELLER",
        badgeBgColor: "orange",
        showBadge: true,
      },
    },
  },
  {
    item: {
      id: "awkdkjl2ed-ael1esslk-2121",
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
        imgURL: prodImg5,
      },
      badge: {
        tagName: "BESTSELLER",
        badgeBgColor: "orange",
        showBadge: true,
      },
    },
  },
  {
    item: {
      id: "awkdk2ed-aelkaesslk-2121",
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
        imgURL: prodImg6,
      },
      badge: {
        tagName: "BESTSELLER",
        badgeBgColor: "orange",
        showBadge: true,
      },
    },
  },
  {
    item: {
      id: "awkdkjl2ed-ae0aesslk-2121",
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
        imgURL: prodImg7,
      },
      badge: {
        tagName: "BESTSELLER",
        badgeBgColor: "orange",
        showBadge: true,
      },
    },
  },
  {
    item: {
      id: "awkdkjl2ed-aelkslk-2121",
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
        imgURL: prodImg8,
      },
      badge: {
        tagName: "BESTSELLER",
        badgeBgColor: "orange",
        showBadge: true,
      },
    },
  },
  {
    item: {
      id: "awkdkjl2ed-aelkaesslk-21",
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
        imgURL: prodImg9,
      },
      badge: {
        tagName: "BESTSELLER",
        badgeBgColor: "orange",
        showBadge: true,
      },
    },
  },
  {
    item: {
      id: "awkdkjl2ed-aelks9k-2121",
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
        imgURL: prodImg10,
      },
      badge: {
        tagName: "BESTSELLER",
        badgeBgColor: "orange",
        showBadge: true,
      },
    },
  },
];

const section1Preview = (
  <>
    <Grid productsList={productsList} />
  </>
);
const section1Code = ``;
const section1 = CompSectionTemplate({
  sectionHeading: "Product Grid",
  sectionDesc: "",
  preview: section1Preview,
  code: section1Code,
});
