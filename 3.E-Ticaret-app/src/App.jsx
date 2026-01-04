import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Basket from "./pages/Basket";
import Header from "./componens/Heder.jsx";
const App = () => {
  return (
    <div>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>{" "}
      </main>
    </div>
  );
};

export default App;
