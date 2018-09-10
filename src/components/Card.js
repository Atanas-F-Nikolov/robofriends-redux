import React from "react";
import robotPlaceholder from "../assets/img/robot-placeholder.png";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <img
        alt="robots"
        src={robotPlaceholder}
        data-src={`https://robohash.org/${id}?size=200x200`}
        className="lazyload"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
