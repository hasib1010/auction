import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import toast from "react-hot-toast";

export default function Step5({
  onSubmit,
  loading,
  customerId,
  userId,
  clientSecret,
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  console.log("Step5 props:", { clientSecret, customerId, userId, loading });

  const handleCardSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      toast.error("Stripe not initialized");
      return;
    }

    setIsProcessing(true);

    try {
      const { error, setupIntent } = await stripe.confirmSetup({
        elements,
        confirmParams: {
          return_url: window.location.origin + "/signup",
        },
        redirect: "if_required",
      });

      if (error) {
        throw new Error(error.message);
      }

      if (setupIntent && setupIntent.status === "succeeded") {
        // Attach card
        const res = await axios.post(
          "http://localhost:8000/api/stripe/attach-card",
          {
            userId,
            customerId,
            paymentMethodId: setupIntent.payment_method,
          },
          { withCredentials: true }
        );
        console.log("Card attached:", res.data);
        toast.success("Account created successfully!");
        // Call the parent onSubmit to handle redirect
        onSubmit();
      } else {
        throw new Error("Setup intent failed");
      }
    } catch (error) {
      console.error("Card attachment error:", error);
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Card attachment failed"
      );
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6 pb-6 border-b border-[#e3e3e3]">
        Payment Details
      </h2>
      <div className="space-y-4">
        {clientSecret ? (
          <form onSubmit={handleCardSubmit}>
            <PaymentElement
              options={{
                layout: "tabs",
              }}
            />
            <button
              type="submit"
              disabled={!stripe || isProcessing}
              className="w-full mt-4 px-6 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              {isProcessing ? "Processing..." : "Complete Payment"}
            </button>
          </form>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">Loading payment form...</p>
            <p className="text-sm text-gray-400 mt-2">
              Please complete the previous steps first
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
