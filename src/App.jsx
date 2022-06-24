import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import quotes from "./Quotes.json";

const colors = [
  "#4FC1FF",
  "#E8B9AB",
  "#CB769E",
  "#69995D",
  "#D2D7DF",
  "#3AA7A3",
  "#ECA400",
  "#006992",
  "#AFECE7",
  "#81F499",
  "#890620",
  "#B6465F",
  "#8ACDEA",
];

function App() {
  const numberRandom = (array) => {
    return Math.floor(Math.random() * array.length);
  };

  const getElementRandom = (array) => {
    const i = numberRandom(array);
    return array[i];
  };

  const [quotesRandom, setQuotesRandom] = useState(getElementRandom(quotes));
  const [colorRandom, setColorRandom] = useState(getElementRandom(colors));

  const clickButton = () => {
    setQuotesRandom(getElementRandom(quotes));
    setColorRandom(getElementRandom(colors));
  };

  const appStyle = {
    backgroundColor: colorRandom,
  };
  return (
    <div style={appStyle} className="App">
      <QuoteBox
        quotesRandom={quotesRandom}
        colorRandom={colorRandom}
        clickButton={clickButton}
      />
    </div>
  );
}

export default App;
