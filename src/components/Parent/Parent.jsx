import React, { useContext } from "react";
import "./Parent.css";
import Child from "../Child/Child.jsx";
import { UserContext } from "../../context/UserContext";

function Parent() {
  const { someState, toggleState } = useContext(UserContext);
  return (
    <div className="Parent">
      <p className="childTag">Child</p>
      <Child></Child>
      <div className="parentContent">
        <span>ParentContent:</span>
        <b>{someState ? "True" : "False"}</b>
        <button onClick={toggleState}>Toggle</button>
      </div>
    </div>
  );
}

export default Parent;
