import React, { Component } from "react";
import s from "./app.component.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <h1 className={s.intro}>Hello!</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
