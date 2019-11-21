import React from "react";
import "./App.css";
import { Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Schedule from "./components/Schedule";
import ClassesPage from "./components/ClassesPage"
import AboutPage from "./components/AboutPage";
// import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="app">
      <Header />
      <Route exact path='/' render={() => (
        <MainPage />
      )} />
      <Route path='/classes' render={() => (
        <ClassesPage />
      )} />
      <Route path='/schedule' render={() => (
        <Schedule />
      )} />
      <Route path='/about' render={() => (
        <AboutPage />
      )}/>
      <Footer />
    </div>
  );
}

export default App;
