export type User = {
    name: string,
    email: string,
    address: string,
    phoneNumber: string
}

export type FormField = {
    controlName: string;
    inputName: string;
    validation: string[];
    label: string;
    classes: {
        containerClasses: string;
    };
    attributes: {
        name: string;
        id: string;
        type: string;
        placeholder: string;
    };
};