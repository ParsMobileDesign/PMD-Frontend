import React, { useReducer } from "react";

import "./input2.scss";
const inputReducer = (state, action) => {
  switch (action.type) {
    case "change":
      return {
        ...state,
        value: action.payload,
        isValid: action.payload !== "",
        isTouched: true,
      };
    case "blur":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input2 = (props) => {
  const [inputState, dispacher] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouched: false,
  });
  const changeHandler = (event) => {
    dispacher({ type: "change", payload: event.target.value });
  };
  const blurHandler = (event) => {
    dispacher({ type: "blur" });
  };
  return (
    <div>
      {
        <label>
          {!inputState.isValid && inputState.isTouched ? "Value is Required !" : ""}
        </label>
      }
      <input
        onChange={changeHandler}
        className={`${props.cssClass} ${
          !inputState.isValid && inputState.isTouched ? "danger" : ""
        }`}
        onBlur={blurHandler}
      />
    </div>
  );
};

export default Input2;
