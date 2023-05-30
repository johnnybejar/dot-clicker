import { useEffect, useState } from "react";
import Color from "./Color";
import "./App.css";

interface Dot {
  x: number;
  y: number;
}

function App() {
  const [dots, setDots] = useState<Dot[]>([]);
  const [color, setColor] = useState<string>("green");
  const [redos, setRedos] = useState<Dot[]>([]);

  const placeDot = (e: React.MouseEvent) => {
    // The diameter of each dot is 25 pixels, so we subtract the radius
    // from the coordinates so that the dot is centered
    const dot: Dot = { x: e.clientX - 12.5, y: e.clientY - 12.5 };
    setDots([...dots, dot]);
    // Each time a dot is placed, the redos are wiped
    setRedos([]);
  };

  const removeDot = (index: number) => {
    const dotsList = [...dots];
    dotsList.splice(index, 1);
    setDots(dotsList);
  };

  const undoDot = () => {
    const dotsList = [...dots];
    const redoDot = dotsList.pop();
    if (redoDot) {
      setRedos([...redos, redoDot]);
    }
    setDots(dotsList);
  };

  const redoDot = () => {
    const redosList = [...redos];
    const dot = redosList.pop();
    if (dot) {
      setDots([...dots, dot]);
    }
    setRedos(redosList);
  };

  const resetDots = () => {
    setDots([]);
    setRedos([]);
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
      <ul className="buttons">
        <li>
          <button
            className="button"
            onClick={(e) => {
              e.stopPropagation();
              resetDots();
            }}
          >
            Reset
          </button>
        </li>
        <li>
          {dots.length === 0 ? (
            <button disabled className="button" onClick={undoDot}>
              Undo
            </button>
          ) : (
            <button className="button" onClick={undoDot}>
              Undo
            </button>
          )}
        </li>
        <li>
          {redos.length > 0 ? (
            <button className="button" onClick={redoDot}>
              Redo
            </button>
          ) : (
            <button disabled className="button" onClick={redoDot}>
              Redo
            </button>
          )}
        </li>
      </ul>
      <Color onChange={changeDotColor} currentColor={color} />
    </>
  );
}

export default App;
