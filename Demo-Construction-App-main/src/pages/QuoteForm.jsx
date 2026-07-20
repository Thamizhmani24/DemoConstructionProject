import React from "react";

const QuoteForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg border border-gray-200 rounded-md p-8 w-[600px]">
        <h2 className="text-xl font-bold mb-6">GET A FREE ESTIMATE</h2>

        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Plot Location
            </label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100">
              <option>Select location</option>
              <option>Location 1</option>
              <option>Location 2</option>
            </select>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Construction Requirements
            </label>
            <textarea
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100"
              rows="3"
            ></textarea>
          </div>

          {/* Reset button */}
          <div className="col-span-2">
            <button
              type="reset"
              className="w-full py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
            >
              RESET
            </button>
          </div>

          {/* Submit button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-white font-bold rounded-md hover:bg-yellow-500"
            >
              GET A FREE QUOTE NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
