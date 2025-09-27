'use client';
import React, { useState } from 'react';
import Step1 from '@/components/SignUp/Step1';
import Step2 from '@/components/SignUp/Step2';
import Step3 from '@/components/SignUp/Step3';
import Step4 from '@/components/SignUp/Step4';
import Step5 from '@/components/SignUp/Step5';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        accountType: 'bidding',
        firstName: '',
        middleName: '',
        surname: '',
        email: '',
        phoneCode: '+44',
        phone: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false,
        newsAccepted: false,
        billingCountry: '',
        billingAddressLine1: '',
        billingAddressLine2: '',
        billingCity: '',
        billingPostcode: '',
        shippingSameAsBilling: false,
        shippingCountry: '',
        shippingAddressLine1: '',
        shippingAddressLine2: '',
        shippingCity: '',
        shippingPostcode: '',
        cardHolderName: '',
        cardNumber: '',
        expiryMonth: '',
        expiryYear: '',
        cvc: '',
        autoInvoice: false
    });

    const callingCodes = [
        "+44", "+49", "+33", "+39", "+34",
        "+1", "+52", "+86", "+81", "+91", "+880", "+82", "+62"
    ];

    const totalSteps = 5;
    const steps = [
        { number: 1, title: '1' },
        { number: 2, title: '2' },
        { number: 3, title: '3' },
        { number: 4, title: '4' },
        { number: 5, title: 'Final' }
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const nextStep = () => setCurrentStep(s => Math.min(s + 1, totalSteps));
    const prevStep = () => setCurrentStep(s => Math.max(s - 1, 1));


    const StepIndicator = () => (
        <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                        <div
                            className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2
                ${currentStep > step.number
                                    ? "bg-purple-600 text-white border-purple-600"
                                    : currentStep === step.number
                                        ? "bg-white text-purple-600 border-purple-600"
                                        : "bg-gray-200 text-gray-500 border-gray-200"}
              `}
                        >
                            {step.title}
                        </div>
                    </div>
                    {index < steps.length - 1 && (
                        <div className={`flex-1 h-0.5 mx-2 ${currentStep > step.number ? "bg-purple-600" : "bg-gray-200"}`} />
                    )}
                </div>
            ))}
        </div>
    );

    const stepContents = [
        <Step1 key="s1" formData={formData} handleInputChange={handleInputChange} />,
        <Step2 key="s2" formData={formData} handleInputChange={handleInputChange} callingCodes={callingCodes} />,
        <Step3 key="s3" formData={formData} handleInputChange={handleInputChange} />,
        <Step4 key="s4" formData={formData} handleInputChange={handleInputChange} />,
        <Step5 key="s5" formData={formData} handleInputChange={handleInputChange} />
    ];

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert('Account created successfully!');
        router.push('/');
    };

    return (
        <div className="min-h-screen grid grid-cols-[965px_1fr]">
            <div className="bg-[#F2F0E9] flex flex-col items-center justify-center text-[#0E0E0E]">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Create an account</h1>
                    <p className="text-gray-600 mt-2">Create an account simply 5 easier steps</p>
                </div>

                <div className="max-w-[682px] mx-auto bg-white rounded-xl shadow-lg p-10">
                    <StepIndicator />

                    <div className="mb-8">
                        {stepContents[currentStep - 1]}
                    </div>

                    <div className="flex justify-between">
                        <div className="w-full">
                            {currentStep < totalSteps ? (
                                <button
                                    onClick={nextStep}
                                    className="w-full px-6 py-2 bg-linear-to-br from-[#E95AFF] to-[#9F13FB] text-white rounded-full"
                                >
                                    Save and Continue
                                </button>
                            ) : (
                                <button
                                    onClick={handleSubmit}
                                    className="w-full px-6 py-2 bg-linear-to-br from-[#E95AFF] to-[#9F13FB] text-white rounded-full"
                                >
                                    Complete Registration
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    backgroundImage: "url('/image 67.png')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            />
        </div>
    );
}
