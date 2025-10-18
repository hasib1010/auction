
import React from "react";
import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from "@stripe/react-stripe-js";

export default function Step5({ formData, handleInputChange }) {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-6 pb-6 border-b border-[#e3e3e3]">Payment Details</h2>
            <div className="space-y-4">
                <div>
                    <label htmlFor="cardHolderName" className="text-lg font-semibold text-[#0E0E0E] block mb-2">
                        Card Holder Name
                    </label>
                    <input
                        type="text"
                        value={formData.cardHolderName}
                        onChange={(e) => handleInputChange("cardHolderName", e.target.value)}
                        className="w-full border border-[#E3E3E3] bg-[#F7F7F7] rounded p-2 focus:outline-none focus:ring-0"
                    />
                </div>
                <div>
                    <label htmlFor="cardNumber" className="text-lg font-semibold text-[#0E0E0E] block mb-2">
                        Card Number
                    </label>
                    <CardNumberElement
                        className="w-full border border-[#E3E3E3] bg-[#F7F7F7] rounded p-2 focus:outline-none focus:ring-0"
                    />
                </div>
                <div className="flex gap-2">
                    <div>
                        <label htmlFor="expiry" className="text-lg font-semibold text-[#0E0E0E] block mb-2">
                            Expiry
                        </label>
                        <CardExpiryElement
                            className="w-full border border-[#E3E3E3] bg-[#F7F7F7] rounded p-2 focus:outline-none focus:ring-0"
                        />
                    </div>
                    <div>
                        <label htmlFor="CVC" className="text-lg font-semibold text-[#0E0E0E] block mb-2">
                            CVC
                        </label>
                        <CardCvcElement
                            className="w-full border border-[#E3E3E3] bg-[#F7F7F7] rounded p-2 focus:outline-none focus:ring-0"
                        />
                    </div>
                </div>

                {/* <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={formData.autoInvoice}
                        onChange={(e) => handleInputChange("autoInvoice", e.target.checked)}
                    />
                    Auto Invoice Payment
                </label> */}
            </div>
        </div>
    );
}
