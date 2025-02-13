// app/multi-step-form/page.tsx
"use client";

import { useState } from "react";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import Sidebar from "./components/Sidebar";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";

// Define the Plan type
interface Plan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

// Define the AddOn type
interface AddOn {
  id: string;
  title: string;
  price: number;
}

export default function MultiStepFormPage() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);
  const [isYearly, setIsYearly] = useState(false);

  const { currentStepIndex, step, steps, next, back, isFirstStep, isLastStep } =
    useMultiStepForm([
      <PersonalInfo
        key={1}
        onNext={(data) => {
          console.log("Personal Info Data:", data);
          next();
        }}
      />,
      <SelectPlan
        key={2}
        onNext={(plan: Plan) => {
          setSelectedPlan(plan); // Update selectedPlan state
          next();
        }}
        isYearly={isYearly}
        setIsYearly={setIsYearly}
      />,
      <AddOns
        key={3}
        onNext={(addOns: AddOn[]) => {
          setSelectedAddOns(addOns); // Update selectedAddOns state
          next();
        }}
      />,
      <Summary
        key={4}
        selectedPlan={selectedPlan} // Pass selectedPlan to Summary
        selectedAddOns={selectedAddOns} // Pass selectedAddOns to Summary
        isYearly={isYearly} // Pass isYearly to Summary
      />,
    ]);

  return (
    <div className="flex flex-col sm:flex-row min-h-screen p-4 sm:p-8 bg-gray-50">
      <div className="w-full sm:w-1/4 mb-6 sm:mb-0 sm:pr-4">
        <Sidebar currentStepIndex={currentStepIndex} />
      </div>
      <div className="w-full sm:w-3/4 bg-white p-6 sm:p-8 rounded-lg shadow">
        {step}
        <div className="mt-6 flex justify-between">
          {!isFirstStep && (
            <button
              onClick={back}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              Go Back
            </button>
          )}
          {!isLastStep && currentStepIndex !== 0 && (
            <button
              onClick={next}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
