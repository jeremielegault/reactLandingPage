import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import FormContext from "./Reducers/FormContext";

const ContactUs = () => {
  const history = useHistory();

  const {
    state: {
      firstName,
      lastName,
      email,
      shippingName,
      shippingStreet,
      shippingCity,
      shippingPostalZipCode,
      country,
      province,
    },
    receiveFormInfo,
  } = React.useContext(FormContext);

  const [formData, setFormData] = useState({
    firstName,
    lastName,
    email,
    shippingName,
    shippingStreet,
    shippingCity,
    shippingPostalZipCode,
    country,
    province,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/confirmation");
    console.log("You clicked submit.");
  };

  // const formContext = useContext(FormContext);

  // const postToDb = () => {
  //   fetch("http://localhost:8000/addreport", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formContext.state),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.status === 201) {
  //         console.log("Success!");
  //         console.log("formcontext", formContext.state);
  //         console.log("formadata", formData);
  //         // history.push("/thankyou");
  //       } else {
  //         console.log("Error");
  //       }
  //     });
  // };

  return (
    <Wrapper>
      <Form>
        <H2>Customer information</H2>

        <Label htmlFor="firstName">First name</Label>
        <Input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={(event) => {
            setFormData({ ...formData, firstName: event.target.value });
          }}
          placeholder="Enter your first name"
          required
        />

        <Label>Last name</Label>
        <Input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={(event) => {
            setFormData({ ...formData, lastName: event.target.value });
          }}
          placeholder="Enter your last name"
          required
        />

        <Label>Email</Label>
        <Input
          type="text"
          name="email"
          value={formData.email}
          onChange={(event) => {
            setFormData({ ...formData, email: event.target.value });
          }}
          placeholder="Enter your email"
          required
        />

        <H2>Shipping details</H2>

        <Label htmlFor="shippingName">Full name</Label>
        <Input
          type="text"
          name="shippingName"
          value={formData.shippingName}
          onChange={(event) => {
            setFormData({ ...formData, shippingName: event.target.value });
          }}
          placeholder="Enter your shipping name"
          required
        />

        <Label>Street address</Label>
        <Input
          type="text"
          name="shippingStreet"
          value={formData.shippingStreet}
          onChange={(event) => {
            setFormData({ ...formData, shippingStreet: event.target.value });
          }}
          placeholder="Enter your street address"
          required
        />

        <Label>City</Label>
        <Input
          type="text"
          name="shippingCity"
          value={formData.shippingCity}
          onChange={(event) => {
            setFormData({ ...formData, shippingCity: event.target.value });
          }}
          placeholder="Enter your city"
          required
        />

        <Label>Postal/Zip code</Label>
        <Input
          type="text"
          name="shippingPostalZipCode"
          value={formData.shippingPostalZipCode}
          onChange={(event) => {
            setFormData({
              ...formData,
              shippingPostalZipCode: event.target.value,
            });
          }}
          placeholder="Enter your postal/zip code"
          required
        />

        <Label>Country</Label>
        <Input
          type="text"
          name="country"
          value={formData.country}
          onChange={(event) => {
            setFormData({ ...formData, country: event.target.value });
          }}
          placeholder="Enter your Country"
          required
        />
        <Label htmlFor="shippingStateProvince">Province</Label>
        <Input
          type="text"
          name="province"
          value={formData.province}
          onChange={(event) => {
            setFormData({ ...formData, province: event.target.value });
          }}
          placeholder="Enter your province or state"
          required
        />

        <Button
          type="submit"
          onClick={(e) => {
            receiveFormInfo({
              ...formData,
            });
            handleSubmit(e);
            // postToDb();
          }}
        >
          Submit Form
        </Button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  border-radius: 10px;
  border: 3px solid black;
  font-size: 16px;
  font-family: "Raleway", sans-serif;
`;

const Label = styled.label`
  padding-bottom: 5px;
  padding-top: 5px;
  font-size: 18px;
  font-family: "Raleway", sans-serif;
`;

const H2 = styled.h3`
  padding-bottom: 25px;
  padding-top: 25px;
  text-align: center;
  color: var(--color-darkTurq);
  font-family: "Raleway", sans-serif;
`;
const Button = styled.button`
  font-family: "Raleway", sans-serif;
  width: 250px;
  margin-top: 25px;
  margin-bottom: 25px;
  background: black;
  color: white;
  border-radius: 4px;
  border: 0;
  align-items: center;
  justify-content: center;
  &:hover {
    /* transform: rotate(5deg) scale(1.1); */
    background: #fabf7c;
    /* border: solid #ae45ac; */
  }
`;

export default ContactUs;
