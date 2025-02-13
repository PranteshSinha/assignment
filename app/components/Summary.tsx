// app/multi-step-form/components/Summary.tsx
"use client";

import React from "react";

interface Plan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

interface AddOn {
  id: string;
  title: string;
  price: number;
}

interface SummaryProps {
  selectedPlan: Plan | null;
  selectedAddOns: AddOn[];
  isYearly: boolean;
}

const Summary: React.FC<SummaryProps> = ({
  selectedPlan,
  selectedAddOns,
  isYearly,
}) => {
  if (!selectedPlan) {
    return <div>No plan selected.</div>;
  }

  // Calculate total cost
  const planPrice = isYearly
    ? selectedPlan.yearlyPrice
    : selectedPlan.monthlyPrice;
  const addOnsTotal = selectedAddOns.reduce(
    (total, addOn) => total + addOn.price,
    0
  );
  const total = planPrice + addOnsTotal;

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-950">
          Finishing Up
        </h2>
        <p className="text-gray-700 text-center mb-8">
          Double-check everything looks OK before confirming.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
            <div>
              <h3 className="text-lg font-semibold text-blue-500">
                {selectedPlan.name} ({isYearly ? "Yearly" : "Monthly"})
              </h3>
              <button className="text-blue-900 underline">Change</button>
            </div>
            <p className="text-lg font-semibold text-blue-500">
              ${isYearly ? selectedPlan.yearlyPrice : selectedPlan.monthlyPrice}
              /{isYearly ? "yr" : "mo"}
            </p>
          </div>
          {selectedAddOns.length > 0 ? (
            <div className="space-y-4">
              {selectedAddOns.map((addOn) => (
                <div key={addOn.id} className="flex justify-between">
                  <p className="text-gray-600">{addOn.title}</p>
                  <p className="text-gray-800">
                    +${addOn.price}/{isYearly ? "yr" : "mo"}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No add-ons selected.</p>
          )}
        </div>
        <div className="flex justify-between items-center mt-6 p-6">
          <p className="text-gray-600">
            Total (per {isYearly ? "year" : "month"})
          </p>
          <p className="text-xl font-semibold text-blue-600">
            ${total}/{isYearly ? "yr" : "mo"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
