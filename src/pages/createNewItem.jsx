import React from "react";

import "./createNewItem.scss";
import Input2 from "../components/shared/form-components/input2";
import Button from "../components/shared/form-components/Button";
import { useForm } from "../components/shared/Util/form-hook2";


const CreateNewItem = () => {
  const [formState, inputHandler] = useForm({
    inputs: {
      title: { value: "", isValid: false },
      description: { value: "", isValid: false },
    },
    isFormValid: false,
  });
  const submitHandler = (event) => {
  console.log(formState);
  };
  return (
    <div className="container">
      <div className="row">
        <Input2
          id="title"
          placeholder="Title"
          requireMsg="Title is required"
          onInput={inputHandler}
        />
      </div>
      <div className="row">
        <Input2
          id="description"
          placeholder="Description"
          requireMsg="Description is required"
          onInput={inputHandler}
        />
      </div>
      <div className="row">
        <Button
          title="Save"
          clickHandler={submitHandler}
          type="submit"
          cssClass="btn btn-info"
        />
      </div>
    </div>
  );
};
export default CreateNewItem;
