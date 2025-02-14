// app/multi-step-form/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);
  const [isYearly, setIsYearly] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps = [
    <PersonalInfo
      key={1}
      onNext={(data) => {
        console.log("Personal Info Data:", data);
        setCurrentStepIndex(1); // Move to the next step
      }}
    />,
    <SelectPlan
      key={2}
      onNext={(plan: Plan) => {
        setSelectedPlan(plan); // Update selected plan
        setCurrentStepIndex(2); // Move to the next step
      }}
      isYearly={isYearly}
      setIsYearly={setIsYearly}
    />,
    <AddOns
      key={3}
      onNext={(addOns: AddOn[]) => {
        setSelectedAddOns(addOns); // Update selected add-ons
        setCurrentStepIndex(3); // Move to the next step
      }}
    />,
    <Summary
      key={4}
      selectedPlan={selectedPlan}
      selectedAddOns={selectedAddOns}
      isYearly={isYearly}
      onSubmit={() => router.push("/multi-step-form/submit")} // Pass onSubmit prop
    />,
  ];

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1); // Move to the previous step
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg flex flex-col sm:flex-row">
        {/* Sidebar */}
        <div className="w-full sm:w-1/4 bg-white-600 text-white p-6 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none">
          <Sidebar currentStepIndex={currentStepIndex} />
        </div>

        {/* Form Content */}
        <div className="w-full sm:w-3/4 p-6 sm:p-8">
          {steps[currentStepIndex]}
          <div className="mt-6 flex justify-between">
            {currentStepIndex > 0 && (
              <button
                onClick={handleBack}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Go Back
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
