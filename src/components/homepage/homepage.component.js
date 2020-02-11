import React, { Component } from "react";
import HomeMenuItem from "./MenuItem/MenuItem.component.js";
import "./homepage.styles.scss";

const HomePage = () => {
  //
  return (
    <div className="homepage">
      <div className="directory-menu">
        <HomeMenuItem name="Argyle" />
        <HomeMenuItem name="Striped" />
        <HomeMenuItem name="Wool" />
        <HomeMenuItem name="Athletic" />
        <HomeMenuItem name="Pop Culture" />
      </div>
    </div>
  );
};

export default HomePage;
