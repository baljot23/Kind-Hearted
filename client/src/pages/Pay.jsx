import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import styled from "styled-components";
import axios from "axios";
const KEY =
  "pk_test_51LntngFR1tFiQDgrW02Nsix0eXC8hJLgMG4vIzPyc3GHNDfBVHsDsHeO42NKct81uua0NTLiH1AozkLlv3RtbUOq00IkhVkZoK";
const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };
  const makerequest = async () => {
    try {
      let res = await axios.post("http://localhost:5000/api/checkout/payment", {
        tokenId: stripeToken.id,
        amount: 2000,
      });
      console.log(res.response.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };
  useEffect(() => {
    stripeToken && makerequest();
  }, [stripeToken]);

  return (
    <Container>
      <StripeCheckout
        name="Kind-Hearted"
        image="https://i.pinimg.com/564x/41/8c/f8/418cf8f4b451a9d95d502ae7113adeef.jpg"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        currency="USD"
        token={onToken}
        stripeKey={KEY}
      >
        <PayButton>Pay Now</PayButton>
      </StripeCheckout>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PayButton = styled.button`
  border: none;
  width: 120;
  border-radius: 5px;
  padding: 20px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

export default Pay;
