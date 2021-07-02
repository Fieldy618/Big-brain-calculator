import React from "react";

const Number = ({ setButtonNum, numberString, setNumberString }) => {

  function addNumToString(event) {
      setButtonNum(event.target.id);
      let newNumberString = numberString + event.target.id;
      setNumberString(newNumberString)
      console.log(newNumberString);
    }
    
    // Could store function as variable?
  return (
    <div>
      <section className="numberbuttons grid">
        <button
          className="7"
          id="7"
          onClick={(event) => addNumToString(event)}
        >
          7
        </button>
        <button
          className="8"
          id="8"
          onClick={(event) => addNumToString(event)}
        >
          8
        </button>
        <button
          className="9"
          id="9"
          onClick={(event) => addNumToString(event)}
        >
          9
        </button>
        <button
          className="4"
          id="4"
          onClick={(event) => addNumToString(event)}
        >
          4
        </button>
        <button
          className="5"
          id="5"
          onClick={(event) => addNumToString(event)}
        >
          5
        </button>
        <button
          className="6"
          id="6"
          onClick={(event) => addNumToString(event)}
        >
          6
        </button>
        <button
          className="1"
          id="1"
          onClick={(event) => addNumToString(event)}
        >
          1
        </button>
        <button
          className="2"
          id="2"
          onClick={(event) => addNumToString(event)}
        >
          2
        </button>
        <button
          className="3"
          id="3"
          onClick={(event) => addNumToString(event)}
        >
          3
        </button>
        <button
          className="0"
          id="0"
          onClick={(event) => addNumToString(event)}
        >
          0
        </button>
        <button
          className="."
          id="."
          onClick={(event) => {
            if (!numberString.includes(".")) {
              addNumToString(event)
            }
          }}
        >
          .
        </button>
      </section>
    </div>
  );
};




export default Number;
