import React from "react";

export const FormContext = React.createContext();

// This is to set a unique reservation ID for each user's form.
const { v4: uuidv4 } = require("uuid");

// This is what the object that contains all the user input looks like.
const initialState = {
  _id: uuidv4(),
  firstName: "",
  lastName: "",
  email: "",
  shippingName: "",
  shippingStreet: "",
  shippingCity: "",
  shippingPostalZipCode: "",
  country: "",
  province: "",
};

function reducer(state, action) {
  switch (action.type) {
    // This receives the information from the form.
    case "receive-form-info": {
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        shippingName: action.shippingName,
        shippingStreet: action.shippingStreet,
        shippingCity: action.shippingCity,
        shippingPostalZipCode: action.shippingPostalZipCode,
        country: action.country,
        province: action.province,
      };
    }

    default:
      throw new Error(`unrecognized action: ${action.type}`);
  }
}

export const FormProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const receiveFormInfo = (data) => {
    dispatch({
      type: "receive-form-info",
      ...data,
    });
  };

  return (
    <FormContext.Provider
      value={{
        state,
        receiveFormInfo,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
