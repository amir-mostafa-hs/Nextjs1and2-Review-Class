"use client";

const Error = ({ error, reset }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">
          Something went wrong!
        </h1>
        <p className="mt-4 text-gray-700">{error.message}. Please try again.</p>
        <button
          onClick={() => reset()}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Error;
