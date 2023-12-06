import { FormErrorTypeEnum } from "../enums/common";

// Set item in storage
export const setItem = (key: string, value: string, useSessionStorage = false) => {
	const storage = useSessionStorage ? sessionStorage : localStorage;
	storage.setItem(key, value);
};
  
// Get item from storage
export const getItem = (key: string, useSessionStorage = false): string | null => {
	const storage = useSessionStorage ? sessionStorage : localStorage;
	return storage.getItem(key);
};
  
// Remove item from storage
export const removeItem = (key: string, useSessionStorage = false) => {
	const storage = useSessionStorage ? sessionStorage : localStorage;
	storage.removeItem(key);
};
  
// Clear all items in storage
export const clearStorage = (useSessionStorage = false) => {
	const storage = useSessionStorage ? sessionStorage : localStorage;
	storage.clear();
};

export const validateEmail = (email: string) => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateString = (value: string) => {
	return value && value?.trim()?.length >= 0;
};

export const validateIsGreaterNumber = (value: number, limit: number) => {
	(Number.isInteger(value) && value > limit);
};
  
export const getFormErrors = (type:string, inputName:string) => {
	switch (type) {
	case FormErrorTypeEnum.REQUIRED:
		return `${inputName} required.`;
	case FormErrorTypeEnum.INVALID:
		return `Please enter a valid ${inputName.toUpperCase()}.`;
	default:
		return "";
	}
};

export const verifyAuthentication = () => {
	const authDetailsString = getItem("auth_details");

	if(!authDetailsString){
		return false;
	}

	try {
		const authDetails = JSON.parse(authDetailsString);
		return !!authDetails?.token;	
	} catch (error) {
		return false;
	}
};