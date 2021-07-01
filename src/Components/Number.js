import React from "react";

const Number = () => {
  const storedNumber = (passedId) => {
    console.log(passedId);
  };
  return (
    <div>
      <section className="grid">
        <button className="7" onClick={() => storedNumber(className)}>
          7
        </button>
        <button id="8">8</button>
        <button id="9">9</button>
        <button id="4">4</button>
        <button id="5">5</button>
        <button id="6">6</button>
        <button id="1">1</button>
        <button id="2">2</button>
        <button id="3">3</button>
        <button id="0">0</button>
        <button id=".">.</button>
      </section>
    </div>
  );
};

export default Number;
