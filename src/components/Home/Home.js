import React from "react";
import Ads from "./Ads/Ads";

const Home = () => {
  return (
    <div>
      <div>
        <h1>CREATE SOUND BOARDS WITH FRIENDS</h1>
        <div>Sign Up</div>
        <div>Sign In</div>
      </div>
      <div>
        <Ads />
        <Ads />
        <Ads />
      </div>
    </div>
  );
};

export default Home;
