import React from "react";

const ResumeScore = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      {/* Main Section */}
      <main className="flex flex-col items-center justify-center text-center w-full p-10">
        <h1 className="text-6xl font-bold mt-10">Perfect Your Pitch!</h1>
        <p className="text-xl mt-4 text-gray-400">
          Get Instant Feedback and Boost Your Resume’s Impact.
        </p>

        {/* Upload Section */}
        <div className="mt-12">
          <div className="bg-gray-900 rounded-lg p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="text-gray-400">
              <i className="fas fa-upload text-9xl"></i>
              <p className="mt-6 text-2xl font-semibold">Upload Your Resume</p>
              <p className="mt-2 text-gray-500">Drop it like it's hot!</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="w-full bg-gray-900 text-white py-4 flex justify-center">
        <p>&copy; 2024 Tapln. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ResumeScore;
