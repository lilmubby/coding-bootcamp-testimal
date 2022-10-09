import "./App.css";
import Image from "./Components/Image";
import Content from "./Components/Content";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  let length = Content.length - 1;
  function next() {
    if (count >= length) {
      return setCount(0);
    }
    return setCount(count + 1);
  }

  function prev() {
    if (count <= 0) {
      console.log("prev " + count);
      return setCount(1);
    }
    setCount(count - 1);
  }

  return (
    <div className="App">
      <Image src={Content[count].src} nextHandler={next} prevHandler={prev} />
      <div className="container">
        <p>{Content[count].first}</p>

        <div className="flex">
          <h2>{Content[count].name}</h2>
          <p>{Content[count].tech}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
