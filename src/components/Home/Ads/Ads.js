import React from "react";
import "./Ads.css";

const Ads = props => {
  return (
    <div id="ads">
      <img src={props.ad.adPicture} alt="" />
      <p>{props.ad.adInfo}</p>
    </div>
  );
};

export default Ads;
