import React from "react";

export default function Step3({ formData, handleInputChange }) {
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
            <h2 className="text-2xl font-semibold mb-6 border-b border-[#E3E3E3] text-[#0E0E0E] pb-6">Billing Address</h2>
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
                        <label htmlFor="billingCity" className="text-lg font-semibold text-[#0E0E0E] mb-2 block">City</label>
                        <input
                            id="billingCity"
                            type="text"
                            value={formData.billingCity}
                            onChange={(e) => handleInputChange("billingCity", e.target.value)}
                            className="w-full border border-[#E3E3E3] bg-[#F7F7F7] rounded p-2 focus:outline-none focus:ring-0"
                        />
                    </div>
                    <div className="md:w-1/2 w-full">
                        <label htmlFor="billingPostcode" className="text-lg font-semibold text-[#0E0E0E] mb-2 block">Postcode</label>
                        <input
                            id="billingPostcode"
                            type="text"
                            value={formData.billingPostcode}
                            onChange={(e) => handleInputChange("billingPostcode", e.target.value)}
                            className="w-full border border-[#E3E3E3] bg-[#F7F7F7] rounded p-2 focus:outline-none focus:ring-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
