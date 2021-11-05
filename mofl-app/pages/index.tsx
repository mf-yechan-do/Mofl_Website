import React, { Component } from "react";
import Banner from "../component/home.component/banner";
import Intro from "../component/home.component/intro";
import AboutUs from "../component/home.component/aboutus";
import HomeTop from "../component/hometop";
import CoreValue from "../component/home.component/corevalue";

export default function Home() {
  return (
    <>
    <HomeTop />
      <Banner />
      <Intro />
      <CoreValue />
    </>
  );
}
