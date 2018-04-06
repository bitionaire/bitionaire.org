import * as React from 'react';
import AboutMe from './components/AboutMe';
import Stage from './components/Stage';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Stage />
        <AboutMe />
      </div>
    );
  }
}

export default App;
