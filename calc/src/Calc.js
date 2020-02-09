import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
const buttonList = [
  { value: "C", iconClass: "reset-icon", background: "light" },
  { value: "+/-", iconClass: "plus-icon", background: "light" },
  { value: "%", iconClass: "percent-icon", background: "light" },
  { value: "/", iconClass: "divide-icon", background: "dark" },
  { value: "7", iconClass: "seven-icon", background: "light" },
  { value: "8", iconClass: "eight-icon", background: "light" },
  { value: "9", iconClass: "nine-icon", background: "light" },
  { value: "*", iconClass: "multiply-icon", background: "dark" },
  { value: "4", iconClass: "four-icon", background: "light" },
  { value: "5", iconClass: "five-icon", background: "light" },
  { value: "6", iconClass: "six-icon", background: "light" },
  { value: "-", iconClass: "minus-icon", background: "dark" },
  { value: "1", iconClass: "one-icon", background: "light" },
  { value: "2", iconClass: "two-icon", background: "light" },
  { value: "3", iconClass: "three-icon", background: "light" },
  { value: "+", iconClass: "plus-icon", background: "dark" },
  { value: "0", iconClass: "zero-icon", background: "light" },
  { value: ".", iconClass: "dot-icon", background: "light" },
  { value: "=", iconClass: "equal-icon", background: "dark" }
];

export default function Calc() {
  const [text, setText] = useState("0");
  const [result, setResult] = useState("");
  function plusMinus() {
    return (
      <div className="single-space">
        <div className="button-container">
          <button
            className={"button light plus-minus-button"}
            onClick={() => onButtonClick("+/-")}
          >
            <span className="plus-span">+</span>
            <span>/</span>
            <span className="minus-span">-</span>
          </button>
        </div>
      </div>
    );
  }
  function onButtonClick(val) {
    if (text === "INVALID OPERATION") {
      setText(val);
      return;
    }
    if (parseInt(text) === 0) {
      setText(val);
    } else {
      switch (val) {
        case "C":
          setText("0");
          setResult("");
          break;
        case "=":
          try {
            setResult(eval(text));
            break;
          } catch (e) {
            setText("INVALID OPERATION");
            setResult("");
          }
        case "+/-":
          break;
        default:
          setText(text + val);
          break;
      }
    }
  }
  return (
    <div className="container">
      <div className="calc-container">
        <div className="calc-bottom">
          <Input value={text} onChange={val => setText(val)} />
          <div className="result">{result}</div>
          <div className="button-group">
            {buttonList.map(item =>
              item.value === "+/-" ? (
                plusMinus()
              ) : (
                <Button
                  className={
                    item.value === "=" ? "double-space" : "single-space"
                  }
                  background={item.background}
                  value={item.value}
                  iconClass={item.iconClass}
                  onClick={val => onButtonClick(val)}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
