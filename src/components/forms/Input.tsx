import React, { useEffect, useState } from "react";

import {
	getFormErrors,
	validateEmail,
} from "../../utils/utils";
import { FormErrorTypeEnum, FormValidatorsEnum } from "../../enums/common";

type InputProps = {
    emitValueToParent: (value:string, controlName:string) => void,
    controlName: string,
    label: string,
    error: string,
    valueIn: string | number,
    emitErrorToParent: (controlName:string, error:string) => void,
    attributes: {
      type: string,
      id: string,
      name: string,
      placeholder: string
    }
}

const Input: React.FC<InputProps> = ({
	emitValueToParent,
	controlName,
	label,
	error,
	valueIn,
	emitErrorToParent,
	attributes
}) => {
	const [errorMsg, setErrorMessage] = useState(error);
	const [value, setValue] = useState(valueIn);

	useEffect(() => {
		setErrorMessage(error);
	}, [error]);

	useEffect(() => {
		setValue(valueIn);
	}, [valueIn]);

	const onFocusInput = () => {
		setErrorMessage("");
	};

	/**
   * Validate input.
   * Set error state and emit error state to parent component.
   * @returns void
   */
	const validateInput = () => {
		if (!value) {
			const errorText = getFormErrors(FormErrorTypeEnum.REQUIRED, controlName);
			setErrorMessage(errorText);
			return;
		}
		const isValid = validators(attributes.type, value);
		if (!isValid) {
			const errorText = getFormErrors(FormErrorTypeEnum.INVALID, controlName);
			setErrorMessage(errorText);
		} else {
			setErrorMessage("");
		}
		emitErrorToParent(controlName, error);
	};

	/**
   * Set input state value.
   * Emit value to parent component.
   * @param {*} event
   */
	const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
		emitValueToParent(event.target.value, controlName);
	};

	const validators = (type: string, value: string | number) => {
		switch (type) {
		case FormValidatorsEnum.EMAIL:
			return typeof value === "string" && validateEmail(value);
		case FormValidatorsEnum.TEXT:
		case FormValidatorsEnum.PASSWORD:
			return value && typeof value === "string" && value?.trim()?.length >= 0;
		default:
			break;
		}
	};

	return (
		<div className="form-group">
			<label htmlFor={attributes.name}>{label}</label>
			<input
				type={attributes.type}
				onFocus={() => onFocusInput()}
				onBlur={() => validateInput()}
				className="form-control my-5"
				id={attributes.id}
				name={attributes.name}
				placeholder={`Enter ${attributes.placeholder}`}
				onChange={(event) => {onInputChange(event);}}
				value={value}
				autoComplete="on"
			/>
			<div className="error-container">
				<small className="error-text">
					{errorMsg}
				</small>
			</div>
		</div>
	);
};

export default Input;
