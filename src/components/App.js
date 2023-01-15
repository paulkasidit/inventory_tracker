import React from "react";
import Header from "./Header";
import ProductControl from "./ProductControl.js";
import 'bulma/css/bulma.min.css';

function App() {
  return(
    <React.Fragment>

      <section class = "hero is-info">
        <Header/>
      </section>
      
      <div class = "webContainer">
          <ProductControl/>
      </div>

    </React.Fragment>
  )
}

export default App;
