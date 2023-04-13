import React from "react";

const CandidatesList = ({ candidates }) => {
  return (
    <div className="mt-5">
      <h1 className="text-2xl font-bold mb-5">Candidates List</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Age</th>
            <th className="border border-gray-400 px-4 py-2">Party</th>
            <th className="border border-gray-400 px-4 py-2">Party Symbol</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id}>
              <td className="border border-gray-400 px-4 py-2">
                {candidate.name}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {candidate.age}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {candidate.party}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <img
                  src={candidate.img}
                  alt={candidate.party}
                  className="w-10 h-10 object-contain"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidatesList;
