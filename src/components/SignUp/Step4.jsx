import React from "react";

export default function Step4({ formData, handleInputChange }) {
    const countries = [
        // Europe
        "United Kingdom", "Germany", "France", "Italy", "Spain",
        // North America
        "United States", "Canada", "Mexico",
        // Asia
        "China", "Japan", "India", "Bangladesh", "South Korea", "Indonesia"
    ];

    return (
        <div>
            <h2 className="text-xl font-semibold mb-3">Shipping Address</h2>

            <label className="flex items-center gap-2 mb-4 pb-6 border-b border-[#e3e3e3]">
                <input
                    type="checkbox"
                    checked={formData.shippingSameAsBilling}
                    onChange={(e) =>
                        handleInputChange("shippingSameAsBilling", e.target.checked)
                    }
                />
                My shipping address same as my billing address
            </label>

            {!formData.shippingSameAsBilling && (
                <div className="space-y-4">
                    <div>
                        <label htmlFor="billingCountry" className="text-lg font-semibold text-[#0E0E0E] block mb-2">
                            Country
                        </label>
                        <select
                            id="billingCountry"
                            value={formData.billingCountry}
                            onChange={(e) => handleInputChange("billingCountry", e.target.value)}
                            className="w-full border border-[#E3E3E3] bg-[#F7F7F7] rounded p-2 text-sm focus:outline-none focus:ring-0"
                            aria-label="Country">
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>

                    </div>
                    <div>
                        <label htmlFor="billingAddressLine1" className="text-lg font-semibold text-[#0E0E0E] block mb-2">
                            Address Line 1
                        </label>
                        <input
                            id="billingAddressLine1"
                            type="text"
                            value={formData.billingAddressLine1}
                            onChange={(e) => handleInputChange("billingAddressLine1", e.target.value)}
                            className="w-full border border-[#E3E3E3] bg-[#F7F7F7] rounded p-2 focus:outline-none focus:ring-0"
                        />
                        <label htmlFor="billingAddressLine2" className="text-lg font-semibold text-[#0E0E0E] block mb-2 mt-4">
                            Address Line 2
                        </label>
                        <input
                            id="billingAddressLine2"
                            type="text"
                            value={formData.billingAddressLine2}
                            onChange={(e) => handleInputChange("billingAddressLine2", e.target.value)}
                            className="w-full border border-[#E3E3E3] bg-[#F7F7F7] rounded p-2 focus:outline-none focus:ring-0"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/2 w-full">
                            <label htmlFor="shippingCity" className="text-lg font-semibold text-[#0E0E0E] mb-2 block">City</label>
                            <input
                                id="shippingCity"
                                type="text"
                                value={formData.shippingCity}
                                onChange={(e) => handleInputChange("shippingCity", e.target.value)}
                                className="w-full border border-[#E3E3E3] bg-[#F7F7F7] rounded p-2 focus:outline-none focus:ring-0"
                            />
                        </div>
                        <div className="md:w-1/2 w-full">
                            <label htmlFor="shippingPostcode" className="text-lg font-semibold text-[#0E0E0E] mb-2 block">Postcode</label>
                            <input
                                id="shippingPostcode"
                                type="text"
                                value={formData.shippingPostcode}
                                onChange={(e) => handleInputChange("shippingPostcode", e.target.value)}
                                className="w-full border border-[#E3E3E3] bg-[#F7F7F7] rounded p-2 focus:outline-none focus:ring-0"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
