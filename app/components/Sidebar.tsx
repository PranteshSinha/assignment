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
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Steps</h2>
      <ul>
        {steps.map((step, index) => (
          <li key={step.id} className="mb-2">
            <span
              className={`font-medium ${
                index === currentStepIndex ? "text-blue-600" : "text-gray-600"
              }`}
            >
              {step.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
