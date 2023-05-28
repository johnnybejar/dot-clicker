import { useState } from "react";
import Color from "./Color";
import "./App.css";

interface Dot {
  x: number;
  y: number;
}

function App() {
  const [dots, setDots] = useState<Dot[]>([]);
  const [color, setColor] = useState<string>("green");

  const placeDot = (e: React.MouseEvent) => {
    // The diameter of each dot is 25 pixels, so we subtract the radius
    // from the coordinates so that the dot is centered
    const dot: Dot = { x: e.clientX - 12.5, y: e.clientY - 12.5 };
    setDots([...dots, dot]);
  };

  const removeDot = (index: number) => {
    const dotsList = [...dots];
    dotsList.splice(index, 1);
    setDots(dotsList);
  };

  const resetDots = () => {
    setDots([]);
  };

  const changeDotColor = (color: string) => {
    setColor(color);
  };

  return (
    <>
      <div
        className="canvas"
        onClick={(e) => {
          placeDot(e);
        }}
      >
        <>
          {dots.map((dot: Dot, index: number) => {
            return (
              <div
                key={index}
                className="dot"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  removeDot(index);
                }}
                style={{
                  left: `${dot.x}px`,
                  top: `${dot.y}px`,
                  backgroundColor: color,
                }}
              ></div>
            );
          })}
        </>
      </div>
      <button className="reset" onClick={resetDots}>
        Reset
      </button>
      <Color onChange={changeDotColor} currentColor={color} />
    </>
  );
}

export default App;
