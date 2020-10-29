import React from "react";
import { useForm } from "../components/shared/Util/form-hook";
import Input from "../components/shared/form-components/input";
import "./Contact.scss";

const Contact = () => {
  const [formState, titleHandler] = useForm({
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      message: {
        value: "",
        isValid: false,
      },
    },
    isFormValid: false,
  });
  console.log(formState);
  return (
    <div className="container center direction-column">
      <div className="contact-form">
        <Input
          id="title"
          label="Name"
          element="input"
          placeholde="Name"
          onInput={titleHandler}
        />
        <Input
          rows="5"
          cols="60"
          id="message"
          element="textarea"
          label="Your message"
          placeholde="Your message"
          onInput={titleHandler}
        />
        <input type="button" disabled={!formState.isFormValid} value="Submit" />
      </div>
    </div>
  );
};
export default Contact;
