import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero.tsx";
import Workflow from "../Components/Workflow";
import Team from "../Components/Team";
import Language from "../Components/Language";
import Usecase from "../Components/Usecase";
import Intregration from "../Components/Intregration";
import CustomerSupport from "../Components/Customersupport";
import Pricing from "../Components/Pricing";
import AdditionalFeatures from "../Components/AdditionalFeatures";
import AiSupport from "../Components/AiSupport";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Workflow />
      <Team />
      <Language />
      <Usecase />
      <Intregration />
      <CustomerSupport />
      <Pricing />
      <AdditionalFeatures />
      <AiSupport />
      <NewsLetter />
      <Footer />
    </>
  );
}
