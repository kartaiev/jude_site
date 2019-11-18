import React, { Component } from 'react';
import './App.css';
import { Navbar } from './components/layout/Navbar';
import { NavBtn } from './components/layout/NavBtn';

class App extends Component {
  state = { show: true, classEl: '' };

  showEl = () => {
    if (this.state.show) this.setState({ show: false, classEl: '-close' });
    else this.setState({ show: true, classEl: '' });
  };

  render() {
    const { classEl } = this.state;
    return (
      <div className='App'>
        <Navbar />
        <NavBtn showEl={this.showEl} classEl={classEl} />
      </div>
    );
  }
}

export default App;
