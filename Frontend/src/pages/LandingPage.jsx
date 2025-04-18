import React from "react";
import Carousel from "../components/carousel";
import AboutUs from "../components/AboutUs";
const LandingPage = () => (
  <div className="text-center pt-20 pb-10 bg-orange-100 h-full">
      <h1 className="text-4xl font-bold">Welcome to Eazy-Bite</h1>
      <p className="mt-2 text-lg">Smart Canteen for Smart Campuses</p>
      <Carousel/>
     <AboutUs/>
  </div>
);
export default LandingPage;