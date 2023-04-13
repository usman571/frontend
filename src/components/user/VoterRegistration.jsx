import React, { useState } from "react";

const VoterRegistration = () => {
  const [cnic, setCnic] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cnic.length !== 13) {
      setError("CNIC number must be exactly 13 digits.");
      return;
    }
    // submit form data to server or blockchain
    setError("");
    // showToast("Registration successful!");
  };

  return (
    <div className="mt-20 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto  rounded-lg overflow-hidden shadow-2xl">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold mb-2 text-center">
            Voter Registration
          </h2>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="mb-4">
              <label
                className="block font-medium text-gray-700 mb-2"
                htmlFor="cnic"
              >
                CNIC Number
              </label>
              <input
                className="block bg-gray-100 w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="text"
                name="cnic"
                id="cnic"
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
                required
              />
              {error && (
                <p className="text-red-500 mt-2 text-sm">{error}</p>
              )}
            </div>

            <div className="mb-6">
              <label
                className="block font-medium text-gray-700 mb-2"
                htmlFor="address"
              >
                Account Address
              </label>
              <input
                className="block bg-gray-100 w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="text"
                name="address"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VoterRegistration;

