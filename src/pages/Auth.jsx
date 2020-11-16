import React, { useContext } from "react";
import {AuthContext} from "../components/context/authContext";
import { Link } from "react-router-dom";
import Button from "../components/shared/form-components/Button";
import Input from "../components/shared/form-components/input";
import { useForm } from "../components/shared/Util/form-hook";
import "./Auth.scss";

const Auth = () => {
  const auth = useContext(AuthContext);
  const submitHandler = (event) => {
    event.preventDefault();
    auth.logIn();
  };
  const [formState, inputHandler] = useForm({
    inputs: {
      email: { value: "", isValid: false },
      password: { value: "", isValid: false },
    },
    isFormValid: false,
  });

  return (
    <form onSubmit={submitHandler}>
      <Input
        id="email"
        type="text"
        placeholder="email"
        label="Email"
        element="input"
        onInput={inputHandler}
      />
      <Input
        id="password"
        type="password"
        placeholder="password"
        label="Password"
        element="input"
        onInput={inputHandler}
      />
      <Button
        disabled={!formState.isFormValid}
        type="submit"
        title="Log in"
        cssClass="button"
      />
      <Link to="/signUp">Not registered yet ?</Link>
    </form>
  );
};
export default Auth;
