// app/multi-step-form/components/AddOns.tsx
"use client";

import React, { useState } from "react";

interface AddOn {
  id: string;
  title: string;
  description: string;
  price: number;
}

interface AddOnsProps {
  onNext: (addOns: AddOn[]) => void; // Accepts an array of AddOn objects
}

const addOns: AddOn[] = [
  {
    id: "online-services",
    title: "Online Services",
    description: "Access to multiplayer games",
    price: 10,
  },
  {
    id: "larger-storage",
    title: "Larger Storage",
    description: "Extra 1TB of cloud space",
    price: 20,
  },
  {
    id: "customizable-profile",
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    price: 20,
  },
];

const AddOns: React.FC<AddOnsProps> = ({ onNext }) => {
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);

  const handleAddOnToggle = (addOn: AddOn) => {
    setSelectedAddOns(
      (prev) =>
        prev.some((a) => a.id === addOn.id)
          ? prev.filter((a) => a.id !== addOn.id) // Remove if already selected
          : [...prev, addOn] // Add if not selected
    );
  };

  const handleNext = () => {
    onNext(selectedAddOns); // Pass the selected add-ons to onNext
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-950">
          Pick Add-Ons
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Add-ons help enhance your gaming experience.
        </p>
        <div className="space-y-4">
          {addOns.map((addOn) => (
            <div
              key={addOn.id}
              className={`p-6 border text-blue-900 ${
                selectedAddOns.some((a) => a.id === addOn.id)
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300"
              } rounded-lg cursor-pointer hover:border-blue-600 transition`}
              onClick={() => handleAddOnToggle(addOn)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedAddOns.some((a) => a.id === addOn.id)}
                    onChange={() => handleAddOnToggle(addOn)}
                    className="w-5 h-5 mr-4 cursor-pointer"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{addOn.title}</h3>
                    <p className="text-gray-600">{addOn.description}</p>
                  </div>
                </div>
                <p className="text-blue-600">+${addOn.price}/mo</p>
              </div>
            </div>
          ))}
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

export default AddOns;
