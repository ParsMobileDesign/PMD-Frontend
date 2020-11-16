import React from "react";
import { useForm } from "../components/shared/Util/form-hook";
import Input from "../components/shared/form-components/input";
import "./Contact.scss";
import { Form } from "react-bootstrap";

const Contact = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  const [formState, eventHandler] = useForm({
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      message: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    isFormValid: false,
  });
  return (
    <Form onSubmit={submitHandler}>
      <div className="contact-form">
        <Input
          id="title"
          label="Name :"
          element="input"
          placeholde="Name :"
          onInput={eventHandler}
        />
        <Input
          id="address"
          element="input"
          label="Email :"
          placeholde="Email :"
          onInput={eventHandler}
        />
        <Input
          rows="5"
          cols="80"
          id="message"
          element="textarea"
          label="Your message :"
          placeholde="Your message :"
          onInput={eventHandler}
        />
        <button
          type="submit"
          className="btn btn-info"
          disabled={!formState.isFormValid}
        >
          Submit
        </button>
      </div>
    </Form>
  );
};
export default Contact;
