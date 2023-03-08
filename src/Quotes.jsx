import React, { useEffect, useState } from "react";
import "./Quotes.css";
import logo from "../public/images/line.svg";
import dice from "../public/images/icon-dice.svg";

export default function Quotes() {
  const [quote, setQuotes] = useState(null);

  async function getQuotes() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    setQuotes(data);
  }
  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="quote">
      <div className="quote-card">
        <p>ADVICE #{quote && quote.slip.id}</p>
        <h3>"{quote && quote.slip.advice}"</h3>
        <img src={logo} alt="" />

        <button onClick={getQuotes}>
          <img src={dice} alt="" />
        </button>
      </div>
    </div>
  );
}
