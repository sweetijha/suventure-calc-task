import React, { useState } from "react";

export default function Button(props) {
  const { value, onClick, className, iconClass, background } = props;
  return (
    <div className={className}>
      <div className="button-container">
        <button
          className={"button " + background + " " + iconClass}
          onClick={() => onClick(value)}
        ></button>
      </div>
    </div>
  );
}
