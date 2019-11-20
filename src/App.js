import React from "react";
import "./App.css";
import { Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Schedule from "./components/Schedule";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="app">
      <Header />
      <Route exact path='/' render={() => (
        <MainPage />
      )} />
      <Route path='/schedule' render={() => (
        <Schedule />
      )} />
      <Calendar />
      <Footer />
    </div>
  );
}

export default App;
