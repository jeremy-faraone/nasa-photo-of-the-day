import React from "react";
import "./App.css";
import PictureList from "./PictureList"

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <PictureList />
    </div>
  );
}

export default App;
