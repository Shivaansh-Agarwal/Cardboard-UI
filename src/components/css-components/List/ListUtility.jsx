import React, { useEffect } from "react";
import hljs from "highlight.js";
import {
  CompPageTemplate,
  CompSectionTemplate,
} from "../CompPageTemplates.jsx";
import {
  ListSimple,
  ListOfferBullet,
  StackedList1,
  StackedList2,
} from "./List.jsx";

const ListUtility = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <CompPageTemplate
      pageHeading={"Lists"}
      sections={[section1, section2, section3, section4]}
    />
  );
};
export default ListUtility;

const itemList = [
  { text: "64 GB ROM" },
  { text: "15.49 cm (6.1 inch) Liquid Retina HD Display" },
  { text: "12MP + 12MP | 12MP Front Camera" },
  { text: "A13 Bionic Chip Processor" },
  { text: "Brand Warranty of 1 Year" },
];

const section1Preview = (
  <>
    <ListSimple itemList={itemList} />
  </>
);
const section1Code = `<ListSimple itemList={itemList} />

const itemList = [
  { text: "64 GB ROM" },
  {...},
]`;
const section1 = CompSectionTemplate({
  sectionHeading: "Simple List",
  sectionDesc:
    "This component can be used in places where one needs to display any product features.",
  preview: section1Preview,
  code: section1Code,
});

const offerList = [
  { text: "7% Instant Discount on EMI Using YES BANK Credit Cards" },
  { text: "5% Unlimited Cashback on Flipkart Axis Bank Credit Card" },
  {
    text:
      "10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply",
  },
];

const section2Preview = <ListOfferBullet itemList={offerList} />;
const section2Code = `<ListOfferBullet itemList={itemList} />

const itemList = [
  { text: "7% Instant Discount on EMI Using YES BANK Credit Cards" },
  {...},
]
`;
const section2 = CompSectionTemplate({
  sectionHeading: "Offer List",
  sectionDesc:
    "This component can be used in places where one needs to display any product offers.",
  preview: section2Preview,
  code: section2Code,
});

const section3Preview = (
  <>
    <div style={{ marginBottom: "1rem" }}>
      <StackedList1 itemList={itemList} />
    </div>
    <StackedList1 itemList={itemList} isBorder={false} />
  </>
);
const section3Code = `<StackedList1 itemList={itemList} />
<StackedList1 itemList={itemList} isBorder={false} />

const itemList = [
  { text: "64 GB ROM" },
  {...},
]`;
const section3 = CompSectionTemplate({
  sectionHeading: "Stacked List 1",
  sectionDesc: "",
  preview: section3Preview,
  code: section3Code,
  isFlexRow: false,
});

const section4Preview = (
  <>
    <div style={{ marginBottom: "1rem" }}>
      <StackedList2 itemList={itemList} />
    </div>
    <StackedList2 itemList={itemList} isBorder={false} />
  </>
);
const section4Code = `<StackedList2 itemList={itemList} />
<StackedList2 itemList={itemList} isBorder={false}/>

const itemList = [
  { text: "64 GB ROM" },
  {...},
]
`;
const section4 = CompSectionTemplate({
  sectionHeading: "Stacked List 2",
  sectionDesc: "",
  preview: section4Preview,
  code: section4Code,
  isFlexRow: false,
});
