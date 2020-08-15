import React from "react";
import "./App.css";
import Title from './components/nav/title'
import Nav from './components/nav/nav'
import PhotoCards from './components/photos/photoCards'




const App = () => {
  return (
    <div className="App" >
      <Title />
      <Nav />
      <PhotoCards />
    </div>
  );
}

export default App;