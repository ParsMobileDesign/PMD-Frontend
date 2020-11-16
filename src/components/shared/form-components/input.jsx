import React, { useReducer, useEffect } from "react";

import "./input.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "Change":
      return {
        ...state,
        value: action.payload,
        isValid: action.payload !== "",
      };
    case "Touch":
      return { ...state, isTouched: true };
    default:
      return state;
  }
};

const Input = (props) => {
  const [currentState, dispacher] = useReducer(reducer, {
    value: props.value || "",
    isValid: props.valid || false,
    isTouched: false,
  });

  const { id, onInput } = props;
  const { value, isValid } = currentState;
  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispacher({ type: "Change", payload: event.target.value });
  };
  const blurHandler = () => {
    dispacher({ type: "Touch" });
  };
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className={`form-control ${
          !currentState.isValid && currentState.isTouched && "danger"
        }`}
        onChange={changeHandler}
        onBlur={blurHandler}
        value={currentState.value}
      />
    ) : (
      <textarea
        id={props.id}
        className={`form-control ${
          !currentState.isValid && currentState.isTouched && "danger"
        }`}
        rows={props.rows}
        cols={props.cols || 30}
        onChange={changeHandler}
        onBlur={blurHandler}
        value={currentState.value}
      />
    );
  return (
    <div className="input-container">
      <label className="input-label">{props.label}</label>
      {element}
      {!currentState.isValid && currentState.isTouched && <span className='danger'>this field is required !</span>}
    </div>
  );
};
export default Input;
