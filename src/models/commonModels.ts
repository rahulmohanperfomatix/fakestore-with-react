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

export enum ErrorIdentifier {
    FAILED_FETCH_PRODUCT_LIST = "Failed to fetch product list",
    FAILED_FETCH_CATEGORY_LIST = "Failed to fetch category list",
    FAILED_FETCH_PRODUCT_DETAILS = "Failed to fetch product details"
}

export type ErrorCollection = { key: ErrorIdentifier, message: string}[];