import React, { useState } from "react";
import CandidateCard from "./CandidateCard";

const VotingArea = ({ candidates }) => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleVote = (candidate) => {
    setSelectedCandidate(candidate);
  };

  return (
    <div className="max-w-5xl max-h-screen overflow-y-auto mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="text-center font-semibold text-lg mb-4">
        List of Candidates
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            onVote={handleVote}
          />
        ))}
      </div>
      {selectedCandidate && (
        <div className="mt-8 text-center">
          You have voted for {selectedCandidate.name} ({selectedCandidate.party})
        </div>
      )}
    </div>
  );
};

export default VotingArea;
