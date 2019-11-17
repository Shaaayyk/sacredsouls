import React from "react";
import "./App.css";
// import { Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="app">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
