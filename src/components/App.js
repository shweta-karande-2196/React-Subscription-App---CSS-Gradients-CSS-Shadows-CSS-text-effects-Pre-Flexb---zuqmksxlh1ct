import React from "react";
import "../styles/App.css";
const App = () => {
  return (
    <div id="main">
      <div class="container">
                <div class="community" style={{backgroundColor:"rgb(255, 253, 253)", borderRadius:"11px"}}>
                  <h2 class="community-header" >Join our community</h2>
                </div>
                <div class="card-details">
                  <div class="card" style={{backgroundColor:"rgb(15, 67, 66)"}}>
                    <p class="card-header">Monthly Subscription</p>
                  </div>
                  <div class="why-us" style={{backgroundColor:"rgba(85, 145, 142, 0.698)"}}>
                    <h4 class="why-us-header" >Why Us</h4>
                  </div>
                </div>
              </div>
    </div>
  );
};

export default App;
