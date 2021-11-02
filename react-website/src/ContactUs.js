import React, { useState } from "react";
import styled from "styled-components";
import FormContext from "./Reducers/FormContext";

const ContactUs = () => {
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

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("You clicked submit.");
  // }

  return (
    <Wrapper>
      <Form>
        <H2>Customer information</H2>

        <Label htmlFor="firstName">First name</Label>
        <Input
          type="text"
          // onChange={this.handleFormChanges}
          // value={this.state.firstName}
          name="firstName"
          placeholder="Enter your first name"
          onChange={(event) => {
            setFormData({ ...formData, firstName: event.target.value });
          }}
          value={formData.firstName}
          required
        />

        <Label>Last name</Label>
        <Input
          type="text"
          // onChange={this.handleFormChanges}
          // value={this.state.lastName}
          name="lastName"
          placeholder="Enter your last name"
          onChange={(event) => {
            setFormData({ ...formData, lastName: event.target.value });
          }}
          value={formData.lastName}
          required
        />

        <Label>Email</Label>
        <Input
          type="text"
          // onChange={this.handleFormChanges}
          // value={this.state.email}
          name="email"
          placeholder="Enter your email"
          onChange={(event) => {
            setFormData({ ...formData, email: event.target.value });
          }}
          value={formData.email}
          required
        />

        <H2>Shipping details</H2>

        <Label htmlFor="shippingName">Full name</Label>
        <Input
          type="text"
          name="shippingName"
          placeholder="Enter your shipping name"
          onChange={(event) => {
            setFormData({ ...formData, shippingName: event.target.value });
          }}
          value={formData.shippingName}
          required
        />

        <Label>Street address</Label>
        <Input
          type="text"
          name="shippingStreet"
          placeholder="Enter your street address"
          onChange={(event) => {
            setFormData({ ...formData, shippingStreet: event.target.value });
          }}
          value={formData.shippingStreet}
          required
        />

        <Label>City</Label>
        <Input
          type="text"
          name="shippingCity"
          placeholder="Enter your city"
          onChange={(event) => {
            setFormData({ ...formData, shippingCity: event.target.value });
          }}
          value={formData.shippingCity}
          required
        />

        <Label>Postal/Zip code</Label>
        <Input
          type="text"
          name="shippingPostalZipCode"
          placeholder="Enter your postal/zip code"
          onChange={(event) => {
            setFormData({
              ...formData,
              shippingPostalZipCode: event.target.value,
            });
          }}
          value={formData.shippingPostalZipCode}
          required
        />

        <Label>Country</Label>
        <Input
          type="text"
          name="country"
          placeholder="Enter your Country"
          onChange={(event) => {
            setFormData({ ...formData, country: event.target.value });
          }}
          value={formData.country}
          required
        />
        <Label htmlFor="shippingStateProvince">Province</Label>
        <Input
          type="text"
          name="province"
          onChange={(event) => {
            setFormData({ ...formData, province: event.target.value });
          }}
          value={formData.province}
          placeholder="Enter your province or state"
          required
        />

        <Button
          type="submit"
          onClick={() => {
            receiveFormInfo({
              ...formData,
            });
            // handleSubmit(formContext.state);
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
const Select = styled.select`
  border-radius: 10px;
  border: 3px solid black;
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

// const Img = styled.img`
//   transition: transform 0.4s ease-in;
//   &:hover {
//     opacity: 0.9;
//     transform: translateX(10%) translateY(0%);
//   }
//   /* padding-left: 50px; */
// `;

export default ContactUs;
