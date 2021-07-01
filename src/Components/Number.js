import React from "react";
import { useState } from "react";

const Number = () => {
  const [buttonNum, setButtonNum] = useState(null);
  let numberString = "";
  console.log(buttonNum);

  return (
    <div>
      <section className="numberbuttons grid">
        <button
          className="7"
          id="7"
          onClick={(event) => {
            console.log(event);
            setButtonNum(event.target.id);
            numberString += setButtonNum(event.target.id);
            console.log(numberString);
          }}
        >
          7
        </button>
        <button
          className="8"
          id="8"
          onClick={(event) => {
            console.log(event);
            setButtonNum(event.target.id);
          }}
        >
          8
        </button>
        <button
          className="9"
          id="9"
          onClick={(event) => {
            console.log(event);
            setButtonNum(event.target.id);
          }}
        >
          9
        </button>
        <button
          className="4"
          id="4"
          onClick={(event) => {
            console.log(event);
            setButtonNum(event.target.id);
          }}
        >
          4
        </button>
        <button
          className="5"
          id="5"
          onClick={(event) => {
            console.log(event);
            setButtonNum(event.target.id);
          }}
        >
          5
        </button>
        <button
          className="6"
          id="6"
          onClick={(event) => {
            console.log(event);
            setButtonNum(event.target.id);
          }}
        >
          6
        </button>
        <button
          className="1"
          id="1"
          onClick={(event) => {
            console.log(event);
            setButtonNum(event.target.id);
          }}
        >
          1
        </button>
        <button
          className="2"
          id="2"
          onClick={(event) => {
            console.log(event);
            setButtonNum(event.target.id);
          }}
        >
          2
        </button>
        <button
          className="3"
          id="3"
          onClick={(event) => {
            console.log(event);
            setButtonNum(event.target.id);
          }}
        >
          3
        </button>
        <button
          className="0"
          id="0"
          onClick={(event) => {
            console.log(event);
            setButtonNum(event.target.id);
          }}
        >
          0
        </button>
        <button
          className="."
          id="."
          onClick={(event) => {
            console.log(event);
            setButtonNum(event.target.id);
          }}
        >
          .
        </button>
      </section>
    </div>
  );
};

export default Number;
