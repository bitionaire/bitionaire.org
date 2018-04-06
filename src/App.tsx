import * as React from 'react';
import Stage from './components/Stage';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Stage />
        <AboutMe />
        <Footer />
      </div>
    );
  }
}

export default App;
