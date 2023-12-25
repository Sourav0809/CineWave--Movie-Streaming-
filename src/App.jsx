import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import MyRoutes from "./routes/MyRoutes";

const App = () => {
  return (
    <div className="app">
      <MyRoutes />
    </div>
  );
};

export default App;
