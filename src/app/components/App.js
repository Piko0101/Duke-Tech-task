import React from "react";
import "../styles/App.scss";
import Header from "./Header";

function App() {
  const onClick = () => {
    alert("you clicked");
  };
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
