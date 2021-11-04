import React, { Component } from "react";
import Banner from "../component/home.component/banner";
import Intro from "../component/home.component/intro";
import AboutUs from "../component/home.component/aboutus";
import HomeTop from "../component/hometop";

export default function Home() {
  return (
    <>
    <HomeTop />
      <Banner />
      <Intro />
    </>
  );
}
