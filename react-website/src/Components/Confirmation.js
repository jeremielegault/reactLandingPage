import React, { useContext } from "react";
import styled from "styled-components";
import FormContext from "../Reducers/FormContext";
import { Link } from "react-router-dom";

// Page that displays the user input across the app (actual suggestions are on the return page)

// Confirmation Component
const Confirmation = () => {
  // Access the context that contains every piece of user input
  const formContext = useContext(FormContext);

  const postToDb = () => {
    fetch("http://localhost:8000/addreport", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formContext.state),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 201) {
          console.log("Success!");
          console.log("formcontext", formContext.state);
          // history.push("/thankyou");
        } else {
          console.log("Error");
        }
      });
  };

  return (
    <Wrapper>
      <ConfirmWrap>
        <h1>Confirmation</h1>
        <h2>Verify your info:</h2>
        <h3>Please save your confirmation ID</h3>
        <div>
          <P>
            <FormItem>Confirmation ID: </FormItem>
            {formContext.state._id}
          </P>
        </div>
        <div>
          <P>
            <FormItem>First Name: </FormItem>
            {formContext.state.firstName}
          </P>
        </div>
        <div>
          <P>
            <FormItem>Last Name: </FormItem>
            {formContext.state.lastName}
          </P>
        </div>
        <div>
          <P>
            <FormItem>Your email: </FormItem>
            {formContext.state.email}
          </P>
        </div>
        <P>
          <FormItem>Shipping Name: </FormItem>
          {formContext.state.shippingName}
        </P>
        <P>
          <FormItem>Street: </FormItem>
          {formContext.state.shippingStreet}
        </P>
        <P>
          <FormItem>City: </FormItem>
          {formContext.state.shippingCity}
        </P>
        <P>
          <FormItem>Zip Code: </FormItem>
          {formContext.state.shippingPostalZipCode}
        </P>
        <P>
          <FormItem>Country: </FormItem>
          {formContext.state.country}
        </P>
        <P>
          <FormItem>Province: </FormItem>
          {formContext.state.province}
        </P>
      </ConfirmWrap>
      <Button
        onClick={() => {
          postToDb();
          console.log("you clicked");
        }}
      >
        Save to database!
      </Button>
      <Link to="/contactus">
        <Button>Go Back</Button>
      </Link>
    </Wrapper>
  );
};

export default Confirmation;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  flex: 1;
`;

const P = styled.p`
  margin-top: 6px;
  font-size: 1rem;
`;

const FormItem = styled.span`
  font-weight: bold;
  padding-bottom: 5px;
  padding-top: 5px;
  font-size: 18px;
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

const ConfirmWrap = styled.div`
  border: 3px solid #87a1c6;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
