import { useState } from "react";
import "./App.css";

interface Dot {
  x: number;
  y: number;
}

function App() {
  const [dots, setDots] = useState<Dot[]>([]);

  const placeDot = (e: React.MouseEvent) => {
    // The diameter of each dot is 25 pixels, so we subtract the radius
    // from the coordinates so that the dot is centered
    const dot: Dot = { x: e.clientX - 12.5, y: e.clientY - 12.5 };
    setDots([...dots, dot]);
  };

  const resetDots = () => {
    setDots([]);
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
          {dots.map((dot: Dot) => {
            console.log("start");
            console.log(`placing dot at: (${dot.x}, ${dot.y})`);
            return (
              <div
                className="dot"
                style={{ left: `${dot.x}px`, top: `${dot.y}px` }}
              ></div>
            );
          })}
        </>
      </div>
      <button className="reset" onClick={resetDots}>
        Reset
      </button>
    </>
  );
}

export default App;
