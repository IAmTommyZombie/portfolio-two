import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />

      <Blog />
      <Footer />
    </div>
  );
};

export default App;
