import React from "react";
import '../Styles/app.css'
import Header from "./Header";
import Main from "./Main";

function App({firebase}) {

  return (
    <div className="App">
      <Header />
      <Main firebase={firebase}/>
    </div>
  );
}

export default App;