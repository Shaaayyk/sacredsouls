import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Schedule from './components/Schedule';

class App extends React.Component {
  constructor(props) {
    super(props)
    
  this.state = {
  };
  }
  

  render() {
    return (
      <div className="App">
        <Header />
        <Schedule />
        <Footer />
      </div>
    );
  }
}

export default App;
