import React from "react";
import "../styles/App.scss";
import Header from "./Header";
import Main from "./Main";
import Card from "./shared/Card";

function App() {
  const onClick = () => {
    alert("you clicked");
  };
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
