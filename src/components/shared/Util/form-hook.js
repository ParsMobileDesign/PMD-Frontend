import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  let isValidForm = true;
  for (var input in state.inputs) {
    if (input === action.actInputId) {
      isValidForm = isValidForm && action.actIsValid;
    } else {
      isValidForm = isValidForm && state.inputs[input].isValid;
    }
  }
  switch (action.actType) {
    case "InputChange": {
      let obj = {
        ...state,
        inputs: {
          ...state.inputs,
          [action.actInputId]: {
            value: action.actValue,
            isValid: action.actIsValid,
          },
        },
        isFormValid: isValidForm,
      };
      return obj;
    }
    default:
      return state;
  }
};

export const useForm = (initialObj) => {
  const [formState, dispacher] = useReducer(formReducer, initialObj);
  const titleHandler = useCallback((id, value, isValid) => {
    dispacher({
      actType: "InputChange",
      actInputId: id,
      actValue: value,
      actIsValid: isValid,
    });
  }, []);
  return [formState, titleHandler];
};
