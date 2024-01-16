import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(0);

  const handleButton = (text) => {
    setNumber(number + 1);
    console.log("button darlaa" + " " + number);
  };

  const handleButtonTwo = () => {
    setNumber(number - 1);
    console.log("button darlaa");
  };

  return (
    <div>
      <h1>{number}</h1>
      {/* Argument damjuulsan */}
      <button onClick={() => handleButton("heelo")}>Nemeh</button>

      {/* Argument damjuulaagui */}
      <button onClick={handleButtonTwo}>Hasah</button>
    </div>
  );
}
