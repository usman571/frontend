import React, { useState } from "react";

const ElectionPhase = () => {
  const [currentPhase, setCurrentPhase] = useState("Registration");

  const handlePhaseChange = (phase) => {
    setCurrentPhase(phase);
  };

  return (
    <div className="bg-gray-100 rounded-md p-4">
      <h1 className="text-xl font-bold mb-4">Election Phase</h1>
      <div className="flex gap-4">
        <button
          className={`${
            currentPhase === "Registration"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-700"
          } px-4 py-2 rounded-md`}
          onClick={() => handlePhaseChange("Registration")}
        >
          Registration
        </button>
        <button
          className={`${
            currentPhase === "Voting"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-700"
          } px-4 py-2 rounded-md`}
          onClick={() => handlePhaseChange("Voting")}
        >
          Voting
        </button>
        <button
          className={`${
            currentPhase === "Termination"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-700"
          } px-4 py-2 rounded-md`}
          onClick={() => handlePhaseChange("Termination")}
        >
          Termination
        </button>
      </div>
      <p className="mt-4">
        Current Phase: <strong>{currentPhase}</strong>
      </p>
    </div>
  );
};

export default ElectionPhase;
