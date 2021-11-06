import React from "react";
import "../styles/App.scss";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import '../styles/App.scss'

function App() {
  const onClick = () => {
    alert("you clicked");
  };
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
