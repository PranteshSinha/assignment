// app/multi-step-form/components/SelectPlan.tsx
"use client";

import React, { useState } from "react";

interface Plan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  icon: string;
}

interface SelectPlanProps {
  onNext: (plan: Plan) => void; // Accepts a Plan object
  isYearly: boolean;
  setIsYearly: (isYearly: boolean) => void;
}

const plans: Plan[] = [
  {
    id: "arcade",
    name: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: "🎮",
  },
  {
    id: "advanced",
    name: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    icon: "🚀",
  },
  { id: "pro", name: "Pro", monthlyPrice: 15, yearlyPrice: 150, icon: "💎" },
];

const SelectPlan: React.FC<SelectPlanProps> = ({
  onNext,
  isYearly,
  setIsYearly,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const handleNext = () => {
    if (selectedPlan) {
      onNext(selectedPlan); // Pass the selected plan to onNext
    } else {
      alert("Please select a plan before proceeding.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-950">
          Select Your Plan
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Choose the plan that best suits your needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 border text-blue-800 ${
                selectedPlan?.id === plan.id
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300"
              } rounded-lg cursor-pointer hover:border-blue-600 transition`}
              onClick={() => handlePlanSelect(plan)}
            >
              <div className="text-2xl mb-4">{plan.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-600">
                ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}/
                {isYearly ? "yr" : "mo"}
              </p>
              {isYearly && (
                <p className="text-sm text-blue-600 mt-2">2 months free</p>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center bg-gray-100 p-4 rounded-lg">
          <span
            className={`text-sm font-medium ${
              !isYearly ? "text-blue-600" : "text-gray-600"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={handleToggle}
            className="mx-4 w-12 h-6 bg-blue-600 rounded-full p-1 transition-transform"
          >
            <div
              className={`bg-white w-4 h-4 rounded-full transform ${
                isYearly ? "translate-x-6" : "translate-x-0"
              } transition-transform`}
            />
          </button>
          <span
            className={`text-sm font-medium ${
              isYearly ? "text-blue-600" : "text-gray-600"
            }`}
          >
            Yearly
          </span>
        </div>
        <div className="flex justify-end mt-8">
          <button
            onClick={handleNext}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
