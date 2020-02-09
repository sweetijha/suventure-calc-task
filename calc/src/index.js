import React, { Component } from "react";
import ReactDOM from "react-dom";
import Calc from "./Calc";
import "./style.css";

const wrapper = document.getElementById("container");
console.log("wrapper.", wrapper);
wrapper ? ReactDOM.render(<Calc />, wrapper) : false;
