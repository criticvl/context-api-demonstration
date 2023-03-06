import React, { useContext } from "react";
import "./Child.css";
import GrandChild from "../GrandChild/GrandChild.jsx";
import { UserContext } from "../../context/UserContext";

function Child() {
  const { someState, toggleState } = useContext(UserContext);
  return (
    <div className="Child">
      <p className="grandChildTag">GrandChild</p>
      <GrandChild></GrandChild>
      <div className="childContent">
        <span>ChildContent:</span>
        <b>{someState ? "True" : "False"}</b>
        <button onClick={toggleState}>Toggle</button>
      </div>
    </div>
  );
}

export default Child;
