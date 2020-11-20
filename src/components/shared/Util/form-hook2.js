import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  let formValid = true;
  // console.log(action);
  for (var input in state.inputs) {
    if (action.id === input) formValid = formValid && action.isValid;
    else formValid = formValid && state.inputs[input].isValid;
  }
  switch (action.type) {
    case "INPUT_CHANGED":
      return {
        inputs: {
          ...state.inputs,
          [action.id]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isFormValid: formValid,
      };
    default:
      return;
  }
};
export const useForm = (initialObj) => {
  const [formState, dispacher] = useReducer(formReducer, initialObj);
  const inputHandler = useCallback((id, value, isValid) => {
    dispacher({
      type: "INPUT_CHANGED",
      id: id,
      value: value,
      isValid: isValid,
    });
  }, []);
  return [formState, inputHandler];
};
