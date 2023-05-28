import "./App.css";

interface Props {
  onChange: (color: string) => void;
  currentColor: string;
}

function Color(props: Props) {
  return (
    <div className="color-picker">
      {props.currentColor === "green" ? (
        <div
          className="color"
          style={{ backgroundColor: "green", border: "2px solid white" }}
          onClick={() => {
            console.log();
            props.onChange("green");
          }}
        ></div>
      ) : (
        <div
          className="color"
          style={{ backgroundColor: "green" }}
          onClick={() => {
            console.log();
            props.onChange("green");
          }}
        ></div>
      )}
      {props.currentColor === "blue" ? (
        <div
          className="color"
          style={{ backgroundColor: "blue", border: "2px solid white" }}
          onClick={() => {
            console.log();
            props.onChange("blue");
          }}
        ></div>
      ) : (
        <div
          className="color"
          style={{ backgroundColor: "blue" }}
          onClick={() => {
            console.log();
            props.onChange("blue");
          }}
        ></div>
      )}
      {props.currentColor === "red" ? (
        <div
          className="color"
          style={{ backgroundColor: "red", border: "2px solid white" }}
          onClick={() => {
            console.log();
            props.onChange("red");
          }}
        ></div>
      ) : (
        <div
          className="color"
          style={{ backgroundColor: "red" }}
          onClick={() => {
            console.log();
            props.onChange("red");
          }}
        ></div>
      )}
      {props.currentColor === "orange" ? (
        <div
          className="color"
          style={{ backgroundColor: "orange", border: "2px solid white" }}
          onClick={() => {
            console.log();
            props.onChange("orange");
          }}
        ></div>
      ) : (
        <div
          className="color"
          style={{ backgroundColor: "orange" }}
          onClick={() => {
            console.log();
            props.onChange("orange");
          }}
        ></div>
      )}
      {props.currentColor === "purple" ? (
        <div
          className="color"
          style={{ backgroundColor: "purple", border: "2px solid white" }}
          onClick={() => {
            console.log();
            props.onChange("purple");
          }}
        ></div>
      ) : (
        <div
          className="color"
          style={{ backgroundColor: "purple" }}
          onClick={() => {
            console.log();
            props.onChange("purple");
          }}
        ></div>
      )}
      {props.currentColor === "pink" ? (
        <div
          className="color"
          style={{ backgroundColor: "pink", border: "2px solid white" }}
          onClick={() => {
            console.log();
            props.onChange("pink");
          }}
        ></div>
      ) : (
        <div
          className="color"
          style={{ backgroundColor: "pink" }}
          onClick={() => {
            console.log();
            props.onChange("pink");
          }}
        ></div>
      )}
      {props.currentColor === "white" ? (
        <div
          className="color"
          style={{ backgroundColor: "white", border: "2px solid gray" }}
          onClick={() => {
            console.log();
            props.onChange("white");
          }}
        ></div>
      ) : (
        <div
          className="color"
          style={{ backgroundColor: "white" }}
          onClick={() => {
            console.log();
            props.onChange("white");
          }}
        ></div>
      )}
      {props.currentColor === "black" ? (
        <div
          className="color"
          style={{ backgroundColor: "black", border: "2px solid white" }}
          onClick={() => {
            console.log();
            props.onChange("black");
          }}
        ></div>
      ) : (
        <div
          className="color"
          style={{ backgroundColor: "black" }}
          onClick={() => {
            console.log();
            props.onChange("black");
          }}
        ></div>
      )}
    </div>
  );
}

export default Color;
