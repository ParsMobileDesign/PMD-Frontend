import React, { useEffect, useReducer } from "react";

import "./input2.scss";
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.payload,
        isValid: action.payload !== "",
      };
    case "BLUR":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};
const Input2 = (props) => {
  const { id, placeholder, requireMsg, onInput } = props;
  const [inputState, dispacher] = useReducer(inputReducer, {
    value: props.value || "",
    isValid: false,
    isTouched: false,
  });
  const changeHandler = (event) => {
    dispacher({ type: "CHANGE", payload: event.target.value });
  };
  const blurHandler = () => {
    dispacher({ type: "BLUR" });
  };
  const { value, isValid } = inputState;
  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);
  return (
    <div className="inputGroup">
      <input
        id={id}
        placeholder={placeholder}
        className={`form-control input-control ${
          !inputState.isValid && inputState.isTouched ? "danger" : ""
        }`}
        onBlur={blurHandler}
        onChange={changeHandler}
      />
      {!inputState.isValid && inputState.isTouched && (
        <label className="message">{requireMsg}</label>
      )}
    </div>
  );
};

export default Input2;
