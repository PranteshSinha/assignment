// app/multi-step-form/components/Sidebar.tsx
import React from "react";

const steps = [
  { id: 1, name: "Personal Info" },
  { id: 2, name: "Select Plan" },
  { id: 3, name: "Add-Ons" },
  { id: 4, name: "Summary" },
];

interface SidebarProps {
  currentStepIndex: number;
}

const Sidebar: React.FC<SidebarProps> = ({ currentStepIndex }) => {
  return (
    <div
      className="h-[70vh] p-8 rounded-lg bg-no-repeat flex flex-col justify-start"
      style={{
        backgroundImage: `url('https://raw.githubusercontent.com/timepassgames/frontend-assignment-helper/966b58120ea9c2d0c217bb239b095b1e0116d7c3/assets/images/bg-sidebar-desktop.svg')`,
        backgroundSize: "cover", // Ensure the image covers the entire container
        backgroundPosition: "center", // Center the image
      }}
    >
      <h2 className="text-lg font-semibold mb-6 text-white">Steps</h2>
      <ul className="space-y-4">
        {steps.map((step, index) => (
          <li key={step.id} className="flex items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border ${
                index === currentStepIndex
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-white text-white"
              }`}
            >
              {step.id}
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-300">STEP {step.id}</p>
              <p
                className={`font-medium ${
                  index === currentStepIndex ? "text-white" : "text-gray-300"
                }`}
              >
                {step.name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
