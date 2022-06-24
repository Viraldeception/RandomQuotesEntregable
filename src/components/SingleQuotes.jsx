import React from "react";

const SingleQuotes = ({ usersRandom }) => {
  return (
    <div>
      <h2 className="quote">{usersRandom.quote}</h2>
      <p className="quote__author">-{usersRandom.author}-</p>
    </div>
  );
};

export default SingleQuotes;
