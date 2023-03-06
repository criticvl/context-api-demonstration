import React, { useContext } from "react";
import "./GrandChild.css";
import { UserContext } from "../../context/UserContext";

function GrandChild() {
  const { someState, toggleState } = useContext(UserContext)
  return (
    <div className="GrandChild">
      <div className="GrandChildContent">
        <span>GrandChildContent:</span>
        <b>{someState ? "True" : "False"}</b>
        <button onClick={toggleState}>Toggle</button>
      </div>
    </div>
  );
}

export default GrandChild;
