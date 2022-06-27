import React from "react";
import ButtonQuotes from "./ButtonQuotes";

const QuoteBox = ({ quotesRandom, colorRandom, clickButton }) => {
  console.log(quotesRandom);
  console.log(colorRandom);

  return (
    <>
      <article className="card" style={{ color: colorRandom }}>
        <h2 className="quote">{quotesRandom.quote}</h2>
        <p className="quote__author">-{quotesRandom.author}-</p>
        <ButtonQuotes clickButton={clickButton} colorRandom={colorRandom} />
      </article>
    </>
  );
};

export default QuoteBox;
