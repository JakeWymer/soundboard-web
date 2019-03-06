import React, { useState } from "react";
import Ads from "./Ads/Ads.js";

const Home = () => {
  const [ads, setAds] = useState([
    {
      adPicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3alIFTmLj_p186rGaPHAKTRVOxEQqxC1IhCBXYl0uI-qH8A6I",
      adInfo: "Buy a Fender!"
    },
    {
      adPicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ROzrRY_LfUFcLCgffQcMixtL-cAxUrWSik4_-00k1BPlwTdz",
      adInfo: "Online guitar lessons, from the best instructors."
    },
    {
      adPicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-6EuLcNV1GI_r28mmsW79ZAOhO6Q8h-zaQ9dGwTw1U352v114",
      adInfo: "New episodes every week!"
    }
  ]);

  return (
    <div>
      <div>
        <h1>CREATE SOUND BOARDS WITH FRIENDS</h1>
        <div>Sign Up</div>
        <div>Sign In</div>
      </div>
      <div>
        <Ads ad={ads[0]} />
        <Ads ad={ads[1]} />
        <Ads ad={ads[2]} />
      </div>
    </div>
  );
};

export default Home;
