import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  let isFormValid = true;
  for (var input in state.inputs) {
    if (input === action.inputId) {
      isFormValid = isFormValid && action.isValid;
    } else {
      isFormValid = isFormValid && state.inputs[action.inputId].isValid;
    }
  }
  switch (action.Type) {
    case "InputChange": {
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.Value, isValid: action.isValid },
        },
        isFormValid: isFormValid,
      };
    }
    default:
      return state;
  }
};

export const useForm = (initialObj) => {
  const [formState, dispacher] = useReducer(formReducer, initialObj);
  const titleHandler = useCallback((id, value, isValid) => {
    dispacher({
      type: "InputChange",
      inputId: id,
      value: value,
      isValid: isValid,
    });
  }, []);
  return [formState, titleHandler];
};
