import React, { useEffect } from "react";
import hljs from "highlight.js";
import {
  CompPageTemplate,
  CompSectionTemplate,
} from "../CompPageTemplates.jsx";
import { NavBar } from "./Navigation.jsx";
import imgLogo from "../../../assets/cardboard.svg";

const NavigationUtility = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return <CompPageTemplate pageHeading={"Navbars"} sections={[section1]} />;
};
export default NavigationUtility;

const section1Preview = (
  <>
    <NavBar logoText="Cardboard UI" />
    <NavBar logoImg={imgLogo} logoText="Cardboard UI" />
    <NavBar
      logoImg={imgLogo}
      backgroundColor="darkblue"
      color="white"
      logoText="Cardboard UI"
      buttonsList={[
        { text: "Wishlist", link: "/wishlist" },
        { text: "Cart", link: "/cart" },
      ]}
    />
    <NavBar
      logoImg={imgLogo}
      backgroundColor="purple"
      color="white"
      logoText="Cardboard UI"
      isSearch={true}
    />
    <NavBar
      logoImg={imgLogo}
      backgroundColor="black"
      color="white"
      logoText="Cardboard UI"
      isSearch={true}
      buttonsList={[
        { text: "Wishlist", link: "/wishlist" },
        { text: "Cart", link: "/cart" },
      ]}
    />
  </>
);
const section1Code = `<NavBar logoText="Cardboard UI" />

<NavBar logoImg={imgLogo} logoText="Cardboard UI" />

<NavBar
    logoImg={imgLogo}
    backgroundColor="darkblue"
    color="white"
    logoText="Cardboard UI"
    buttonsList={[
        { text: "Wishlist", link: "/wishlist" },
        { text: "Cart", link: "/cart" },
    ]}
/>

<NavBar
    logoImg={imgLogo}
    backgroundColor="purple"
    color="white"
    logoText="Cardboard UI"
    isSearch={true}
/>

<NavBar
    logoImg={imgLogo}
    backgroundColor="black"
    color="white"
    logoText="Cardboard UI"
    isSearch={true}
    buttonsList={[
        { text: "Wishlist", link: "/wishlist" },
        { text: "Cart", link: "/cart" },
    ]}
/>`;
const section1 = CompSectionTemplate({
  sectionHeading: "Navigation Bars Type-1",
  sectionDesc: "",
  preview: section1Preview,
  code: section1Code,
});
