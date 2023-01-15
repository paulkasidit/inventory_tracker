import React from "react"; 
import "./Header.css";
import buzzlogo from "./../img/buzzlogo.png"

function Header(){
  return(
    <React.Fragment>
      <div class = "columns is-gapless">
        <div class = "column">
          <div class = "headerText">
            <h1>BuzzClub</h1>
            <p>your coffee buddy</p>
          </div>
        </div>
        <div class = "column">
          <figure class="image is-96x96">
            <img src = {buzzlogo} alt = "logo"/>
          </figure>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;

