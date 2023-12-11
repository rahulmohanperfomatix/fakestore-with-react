import { FormField } from "../../models/commonModels";

export type LoginFormFields = FormField[];
export const loginFormFieldArray: LoginFormFields = [
	{
		controlName: "username",
		inputName: "User Name",
		validation: ["required"],
		label: "Username",
		classes: {
			containerClasses: ""
		},
		attributes: {
			name: "username",
			id: "username",
			type: "text",
			placeholder: "Enter Username",
		}
	},
	{
		controlName: "password",
		inputName: "Password",
		validation: ["required"],
		label: "Password",
		classes: {
			containerClasses: ""
		},
		attributes: {
			name: "password",
			id: "password",
			type: "password",
			placeholder: "Enter Password",
		}
	}
];