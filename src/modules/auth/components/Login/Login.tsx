import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { loginFormFieldArray } from "@src/modules/auth/constants";
import { LoginFormControlsAndErrors } from "@src/modules/auth/authModels";
import { CustomButtonVariantEnum, FormErrorTypeEnum } from "@src/enums/common";
import { getFormErrors } from "@src/utils/utils";
import CustomButton from "@src/components/CustomButton";
import Input from "@src/components/forms/Input";
import { loginUser } from "../../helper";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@src/store";

const loginFormControlsAndErrors: LoginFormControlsAndErrors = {
  formFields: {
    username: "",
    password: ""
  },
  formErrors: {
    username: "",
    password: ""
  }
};

const Login = () => {
  const [loginForm, setLoginForm] = useState(loginFormControlsAndErrors);
  const dispatch = useDispatch<AppDispatch>();
  /**
   * Set the error state.
   * @param {*} type shares the key name of formErrors object.
   * @param {*} error shares the error message.
   */
  const setControlFieldError = (type:string, error:string) => {
    setLoginForm((prevState) => {
      return {
        ...prevState,
        formErrors: {
          ...prevState.formErrors,
          [type]: error,
        },
      };
    });
  };

  /**
   * Submit the form.
   * Validate the form by looping through all state values.
   * Save user to local storage.
   */
  const onSubmit = ($event: React.FormEvent<HTMLFormElement>) => {
    $event.preventDefault();
    const hasError = validateSubmission();
    if(!hasError){
      dispatch(loginUser(loginForm.formFields));
      toast("Login Successful.");
      console.log("wow");
      setLoginForm((prevState) => {
        return {
          ...prevState,
          formFields: loginFormControlsAndErrors.formFields,
          formErrors: loginFormControlsAndErrors.formErrors
        };});
    }
  };
  
  /**
   * Loop through the form values and check if all are filled.
   * Set error required for the unfilled keys.
   * @returns void
   */
  const validateSubmission = () => {
    const formData = loginForm?.formFields;
    let hasError = false;
    Object.keys(formData).forEach((key) => {
      const value = formData[key as keyof typeof loginFormControlsAndErrors.formFields];
      if(!value){
        hasError = true;
        const inputName = getInputName(key);
        setLoginForm((prevState) => {
          return {
            ...prevState,
            formErrors: {
              ...prevState.formErrors,
              [key]: getFormErrors(FormErrorTypeEnum.REQUIRED, inputName)
            }
          };
        });
      }
    });
    return hasError;
  };

  /**
   * Get input name for display purpose.
   * @param {*} type shares key name of object.
   * @returns 
   */
  const getInputName = (type: string) => {
    const formDataItem = loginFormFieldArray?.find((formData) => formData?.controlName === type);
    if(formDataItem){
      return formDataItem?.inputName;
    }
    return "";
  };
  
  /**
   * Set value from input to state.
   * @param {*} value shares latest value of input.
   * @param {*} fieldName shares the changed input key name.
   */
  const onInputChange = (value:string, fieldName:string) => {
    setLoginForm((prevState) => ({
      ...prevState,
      formFields: {
        ...prevState.formFields,
        [fieldName]: value,
      },
    }));
  };
  return (
    <div>
      <form onSubmit={($event) => onSubmit($event)}>
        {loginFormFieldArray.map((formData, index) => {
          return <div key={index} className={`${formData.classes.containerClasses}`}>
            <Input attributes={{...formData.attributes}} controlName={formData.controlName} label={formData.label} valueIn={loginForm.formFields[formData.controlName as keyof typeof loginFormControlsAndErrors.formFields]} error={loginForm.formErrors[formData.controlName as keyof typeof loginFormControlsAndErrors.formErrors]} emitValueToParent={onInputChange} emitErrorToParent={(controlName, error) => setControlFieldError(controlName, error)}/>
          </div>;
        })}
        <CustomButton classes={{div: "text-center mt-10", button: "w-100"}} text="Login" variant={CustomButtonVariantEnum.PRIMARY} isDark={false}/>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;