import React, { useContext } from "react";
import styled from "styled-components";
import FormContext from "../Reducers/FormContext";
import { useHistory } from "react-router";

// Page that displays the user input across the app (actual suggestions are on the return page)

// Confirmation Component
const Confirmation = () => {
  // Access the context that contains every piece of user input
  const formContext = useContext(FormContext);

  //   const history = useHistory();

  // const { handleSubmit } = React.useContext(FormContext);

  //   const handleSubmit = () => {
  //     fetch("http://localhost:8000/addreservations", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formContext.state),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.status === 201) {
  //           console.log("Success!");
  //           history.push("/thankyou");
  //         } else {
  //           console.log("Error");
  //         }
  //       });
  //   };

  return (
    <Wrapper>
      <h1>Confirmation</h1>
      <h2>Your party is confirmed!</h2>
      <h3>Please save your Reservation ID</h3>
      <div>
        <P>
          <FormItem>Reservation ID: </FormItem>
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
          <FormItem>email: </FormItem>
          {formContext.state.email}
        </P>
      </div>
      <P>
        <FormItem>shippingName: </FormItem>
        {formContext.state.shippingName}
      </P>
      <Button
        onClick={() => {
          //   handleSubmit();
          console.log("you clicked");
        }}
      >
        Save to database!
      </Button>
    </Wrapper>
  );
};

export default Confirmation;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-color: #bee0ed;
`;

const ConfirmWrap = styled.div`
  border: 3px solid #87a1c6;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const P = styled.p`
  margin-top: 6px;
  font-size: 1rem;
`;

const FormItem = styled.span`
  font-weight: bold;
`;

const Button = styled.button`
  height: 60px;
  width: 160px;
  font-weight: bold;
  background-color: #ebab00;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;
