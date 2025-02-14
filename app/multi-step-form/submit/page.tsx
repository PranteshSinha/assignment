// app/multi-step-form/submit/page.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";

const SubmitPage: React.FC = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/multi-step-form");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg flex flex-col sm:flex-row">
        {/* Sidebar */}
        <div className="w-full sm:w-1/4 bg-blue-600 text-white p-6 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none">
          <Sidebar currentStepIndex={3} />{" "}
          {/* Mark the 4th option (Summary) as active */}
        </div>

        {/* Main Content */}
        <div className="w-full sm:w-3/4 p-6 sm:p-8 flex flex-col justify-center items-center">
          {/* Tick Mark */}
          <div className="text-6xl text-green-500 mb-6">✅</div>

          {/* Thank You Message */}
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Thank You!
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Thanks for confirming your submission! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at{" "}
            <a
              href="mailto:support@loremgaming.com"
              className="text-blue-600 hover:underline"
            >
              support@loremgaming.com
            </a>
            .
          </p>

          {/* Go Back Button */}
          <button
            onClick={handleGoBack}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitPage;
