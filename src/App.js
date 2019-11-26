import React, { Component } from "react";
import "./App.scss";
import { Navbar } from "./components/layout/Navbar";
import { NavBtn } from "./components/layout/NavBtn";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Lesson1 } from "./components/pages/Lesson1";
import { Lesson2 } from "./components/pages/Lesson2";

class App extends Component {
  state = {
    show: true,
    classEl: "close",
    lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  };

  showEl = () => {
    if (this.state.show) this.setState({ show: false, classEl: "show" });
    else this.setState({ show: true, classEl: "close" });
  };

  render() {
    const { classEl, lessons } = this.state;

    return (
      <div className="App">
        <Navbar classEl={classEl} lessons={lessons} showEl={this.showEl} />
        <NavBtn showEl={this.showEl} classEl={classEl} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/1" component={Lesson1} />
          <Route exact path="/2" component={Lesson2} />
        </Switch>
      </div>
    );
  }
}

export default App;
