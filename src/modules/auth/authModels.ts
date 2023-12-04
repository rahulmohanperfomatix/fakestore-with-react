export type AuthDetailsForLogin = {
    username: string,
    password: string
}

export type AuthDetailsAfterLogin = {
    username: string,
    token: string,
    error: string,
}

export type LoginFormControlsAndErrors = {
    formFields: {
        username: string;
        password: string;
    };
    formErrors: {
        username: string;
        password: string;
    };
}
