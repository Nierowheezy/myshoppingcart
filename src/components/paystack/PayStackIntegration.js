import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import "./PayStackIntegration.css";
// import PaystackPop from '@paystack/inline-js'

const PayStackIntegration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    amount: "",
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      amount: "",
    });
  };

  const config = {
    reference: new Date().getTime().toString(),
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    amount: formData.amount * 100,
    publicKey: "pk_test_542f13c10fbc1f25bfa6b889d6d8941f12c3d901",
    // publicKey: process.env.REACT_APP_PAYSTACK,
  };

  console.log(process.env.REACT_APP_PAYSTACK);

  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(
      `payment complete! with reference number ${JSON.stringify(
        reference.reference
      )}`
    );
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    alert("You have cancled this transaction");
  };

  const componentProps = {
    ...config,
    text: "Pay Now",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <>
      <h1>Form</h1>
      <p>Please fill out this form with the required information</p>

      <form onSubmit={onSubmit}>
        <fieldset>
          <label htmlFor="amount">
            Enter amount:{" "}
            <input
              type="amount"
              name="amount"
              value={formData.amount}
              onChange={onChange}
              //   required
            />
          </label>
          <label htmlFor="name">
            Enter Your First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={onChange}
              //   required
            />
          </label>
          <label htmlFor="last-name">
            Enter Your Last Name:{" "}
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={onChange}
              //   required
            />
          </label>
          <label htmlFor="email">
            Enter Your Email:{" "}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              //   required
            />
          </label>

          {/* <label htmlFor="password">
            Create a New Password:
            <input
              type="password"
              name="password"
              //   pattern="[a-z0-5]{8,}"
              required
            />
          </label> */}
        </fieldset>

        <fieldset>
          <label htmlFor="account-type">
            <input type="radio" name="account-type" className="inline" />
            Personal Account
          </label>
          <label htmlFor="account-type">
            <input type="radio" name="account-type" className="inline" />
            Business Account
          </label>
          <label htmlFor="terms">
            <input type="checkbox" name="terms" className="inline" />I accept
            the
            <a href=""> terms and conditions</a>
          </label>
        </fieldset>

        {/* <button type="submit">Pay Now</button> */}
        <PaystackButton className="btn" {...componentProps} />
      </form>
    </>
  );
};

export default PayStackIntegration;
