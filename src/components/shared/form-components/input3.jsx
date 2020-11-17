import React, { useReducer } from "react";
import "./input3.scss";

const Input3 = (props) => {
  const inputReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
          value: action.payload,
          isValid: action.payload !== "",
        };
      case "TOUCHED": {
        return {
          ...state,
          isTouched: true,
        };
      }
      default:
        return state;
    }
  };
  const [inputState, dispacher] = useReducer(inputReducer, {
    value: props.value || "",
    isValid: props.isValid || false,
    isTouched: false,
  });
  const blurHandler = () => {
    dispacher({ type: "TOUCHED" });
  };
  const changeHandler = (event) => {
    dispacher({ type: "CHANGE", payload: event.target.value });
  };
  return (
    <div>
      {!inputState.isValid && inputState.isTouched && (
        <label>Field is Required !</label>
      )}
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={blurHandler}
        className={`${props.cssClass} ${
          !inputState.isValid && inputState.isTouched ? "danger" : ""
        }`}
      />
    </div>
  );
};

export default Input3;
