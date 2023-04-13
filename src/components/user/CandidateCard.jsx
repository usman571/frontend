import React from "react";

const CandidateCard = ({ candidate, onVote }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 flex flex-col md:flex-row md:items-center shadow-md">
      <img
        src={candidate.img}
        alt={candidate.party}
        className="w-24 h-24 md:mr-4 mb-4 md:mb-0"
      />
      <div className="flex-grow">
        <div className="text-lg font-semibold">{candidate.name}</div>
        <div className="text-gray-600">{candidate.party}</div>
      </div>
      <div className="mt-4 md:mt-0">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => onVote(candidate)}
        >
          Vote
        </button>
      </div>
    </div>
  );
};

export default CandidateCard;
