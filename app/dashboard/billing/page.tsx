"use client"
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import React, { useContext, useState } from 'react';

const page: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [isPaymentDone, setIsPaymentDone] = useState<boolean>(false);

  // Handle Plan Selection
  const selectPlan = (plan: string) => {
    setSelectedPlan(plan);
  };


  // Handle Payment
  const handlePayment = () => {
    if (selectedPlan) {
      setIsPaymentDone(true);
      console.log(`Payment successful for the ${selectedPlan} plan!`);
    } else {
      alert('Please select a plan before proceeding.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <h3 className='text-wrap mb-8 opacity-40'>Hey! Have you reached the end of your free trial? Don't worry, upgrade with any plan to continue!</h3>
      <h1 className="text-3xl font-semibold mb-8">Choose a Plan</h1>

      {/* Display plans */}
      <div className="flex justify-center space-x-4 mb-8">
        {/* Plan 1 Card */}
        <div
          onClick={() => selectPlan('Basic')}
          className={`cursor-pointer border rounded-lg p-6 w-64 text-center shadow-md ${
            selectedPlan === 'Basic' ? 'border-blue-500' : 'border-gray-300'
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">Basic Plan</h2>
          <p className="text-lg mb-2">$10/month</p>
          <p className="text-sm text-gray-500">Basic features for personal use</p>
          {selectedPlan === 'Basic' && (
            <p className="text-blue-500 font-semibold mt-4">Selected</p>
          )}
        </div>

        {/* Plan 2 Card */}
        <div
          onClick={() => selectPlan('Premium')}
          className={`cursor-pointer border rounded-lg p-6 w-64 text-center shadow-md ${
            selectedPlan === 'Premium' ? 'border-blue-500' : 'border-gray-300'
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">Premium Plan</h2>
          <p className="text-lg mb-2">$25/month</p>
          <p className="text-sm text-gray-500">All features for business use</p>
          {selectedPlan === 'Premium' && (
            <p className="text-blue-500 font-semibold mt-4">Selected</p>
          )}
        </div>
      </div>

      {/* Payment Button */}
      {!isPaymentDone ? (
        <button
          onClick={handlePayment}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Complete Payment
        </button>
      ) : (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
          <p className="font-bold">Payment Successful!</p>
          <p>Your payment for the {selectedPlan} plan is complete please refresh the page for increase word count.</p>
        </div>
      )}
    </div>
  );
};

export default page;
