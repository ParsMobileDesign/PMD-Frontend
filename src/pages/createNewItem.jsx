import React from "react";
import Button from "../components/shared/form-components/Button";
import Input3 from "../components/shared/form-components/input3";
import Input from "../components/shared/form-components/input";
import { useForm } from "../components/shared/Util/form-hook-2";

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
      }
    },
    isFormValid: false,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
  };
  return (
    <div className="container">
      <div className="row">
        <Input3
          element="input"
          id="title"
          type="text"
          placeholder="Title"
          onInput={inputHandler}
          cssClass="form-control"
        />
      </div>
      <div className="row">
        <Input3
          element="input"
          id="description"
          type="text"
          placeholder="description"
          onInput={inputHandler}
          cssClass="form-control"
        />
      </div>
      <Button
        title="Save"
        clickHandler={submitHandler}
        type="submit"
        cssClass="btn btn-info"
        // disabled={!formState.isFormValid}
      />
    </div>
  );
};
export default CreateNewItem;
