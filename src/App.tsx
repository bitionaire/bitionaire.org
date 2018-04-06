import * as React from 'react';
import Stage from './components/Stage';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Stage />
        <div>
          Testfoo
        </div>
      </div>
    );
  }
}

export default App;
