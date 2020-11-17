import React from "react";
import Button from "../components/shared/form-components/Button";
import Input3 from '../components/shared/form-components/input3'
import Input from "../components/shared/form-components/input";
import { useForm } from "../components/shared/Util/form-hook";

import "./createNewItem.scss";

const CreateNewItem = () => {
  const [formState, inputHandler] = useForm({
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    isFormValid: false,
  });
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
  };
  const onClick = () => {
    console.log("click button 2");
  };
  return (
    <div className="container">
      <div className="row">
        <Input
          element="input"
          id="title"
          type="text"
          placeholder="Title"
          onInput={inputHandler}
        />
      </div>
      <div className="row">
        <Input
          element="input"
          id="description"
          type="text"
          placeholder="description"
          onInput={inputHandler}
        />
      </div>

      <Button
        title="Save"
        clickHandler={submitHandler}
        type="submit"
        cssClass="btn btn-info"
        disabled={!formState.isFormValid}
      />
      <Input3 />
    </div>
  );
};
export default CreateNewItem;
