import React from "react";

const QuoteBox = ({ quotesRandom, colorRandom, clickButton }) => {
  console.log(quotesRandom);
  console.log(colorRandom);

  return (
    <>
      <article className="card" style={{ color: colorRandom }}>
        <h2 className="quote">{quotesRandom.quote}</h2>
        <p className="quote__author">-{quotesRandom.author}-</p>

        <button
          style={{ backgroundColor: colorRandom }}
          className="button__quotes"
          onClick={clickButton}
        >
          <p style={{ color: "white" }} className="button_content">
            New Quote
          </p>
        </button>
      </article>
    </>
  );
};

export default QuoteBox;
