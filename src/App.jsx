import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import BannerContainer from "./components/banner/BannerContainer";
import RowsContainer from "./components/rowscontainer/RowsContainer";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <BannerContainer />
      <RowsContainer />
    </div>
  );
};

export default App;
