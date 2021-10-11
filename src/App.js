import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}

// App = Hoc(App)

export default App;
