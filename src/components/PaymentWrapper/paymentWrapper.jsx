"use client";

import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../../../lib/stripe";

export default function PaymentWrapper({ clientSecret, children }) {
  console.log("PaymentWrapper clientSecret:", clientSecret);

  const options = clientSecret
    ? {
        clientSecret,
        appearance: {
          theme: "stripe",
        },
      }
    : {};

  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
}
