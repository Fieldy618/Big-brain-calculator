import "./App.css";
import Number from "./Components/Number";
import Opeator from "./Components/Operator";
// import ViewPort from "./Components/View-port";
import { useState } from "react";

function App() {
  const [buttonNum, setButtonNum] = useState(null);
  const [numberString, setNumberString] = useState("");

  return (
    <div className="App">
      <body>
        <Number buttonNum={buttonNum} setButtonNum={setButtonNum} numberString={numberString} setNumberString={setNumberString}/>
      </body>
    </div>
  );
}

export default App;
