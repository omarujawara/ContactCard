import React, { Component } from "react";
import ContactCard from "./ContactCard";
// import logo from "./logo.svg";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Contact Card</h1>
        <ContactCard
          name="Omaru Jawara"
          mobile="800-999-4567"
          work="Software Developer"
          email="software@developer.code"
        />
        <ContactCard
          name="Shipu Aashiq"
          mobile="800-431-9872"
          work="Electrical Engineer"
          email="electrical@engineer.bit"
        />
        <ContactCard
          name="Fernando Compos"
          mobile="800-623-5234"
          work="Civil Engineer"
          email="engineer@civil.bld"
        />
      </React.Fragment>
    );
  }
}

export default App;
