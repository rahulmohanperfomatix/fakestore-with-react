import axios from "axios";

export interface ErrorResponse {
  message: string;
}

// Generic error handler function
export const handleAxiosError = (error: unknown): ErrorResponse => {
  if (axios.isAxiosError(error) && error.response) {
    const errorData = error.response.data;
    let message = "An error occurred";
    if (typeof errorData === "string") {
      // If the error response is a string
      message = errorData;
    } else if (typeof errorData === "object" && errorData.message) {
      // If the error response is an object with a 'message' field
      message = errorData.message;
    }
      
    return { message };
  }
  // Fallback for non-Axios errors
  return { message: "An unknown error occurred" };
};
