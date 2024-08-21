import React from "react";

const StudyGroups = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-900 py-16 px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          Find Your Study Buddy
        </h1>
        <p className="mt-4 text-lg md:text-xl tracking-wider">
          Join groups, collaborate, and excel together.
        </p>
        <div className="mt-8 w-full max-w-lg">
          <input
            type="text"
            placeholder="Search for groups or subjects..."
            className="w-full p-4 text-black rounded-lg shadow focus:outline-none"
          />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {/* Group Categories */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
            <div className="text-3xl mb-4 text-black">
              <i className="fas fa-robot"></i>
            </div>
            <h2 className="text-2xl font-semibold text-black">
              Machine Learning
            </h2>
            <p className="mt-2 text-gray-800">Unlock the power of AI.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
            <div className="text-3xl mb-4 text-black">
              <i className="fas fa-database"></i>
            </div>
            <h2 className="text-2xl font-semibold text-black">
              Full Stack - Banking Project
            </h2>
            <p className="mt-2 text-gray-800">Build a secure banking system.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
            <div className="text-3xl mb-4 text-black">
              <i className="fas fa-chart-line"></i>
            </div>
            <h2 className="text-2xl font-semibold text-black">Data Science</h2>
            <p className="mt-2 text-gray-800">Analyze and interpret data.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
            <div className="text-3xl mb-4 text-black">
              <i className="fas fa-code"></i>
            </div>
            <h2 className="text-2xl font-semibold text-black">Programming</h2>
            <p className="mt-2 text-gray-800">Code your way to success.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
            <div className="text-3xl mb-4 text-black">
              <i className="fas fa-network-wired"></i>
            </div>
            <h2 className="text-2xl font-semibold text-black">Networking</h2>
            <p className="mt-2 text-gray-800">Connect systems and people.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
            <div className="text-3xl mb-4 text-black">
              <i className="fas fa-cloud"></i>
            </div>
            <h2 className="text-2xl font-semibold text-black">
              Cloud Computing
            </h2>
            <p className="mt-2 text-gray-800">Scale with the cloud.</p>
          </div>
        </div>

        {/* Join/Create Group Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 w-full max-w-4xl">
          <button className="bg-orange-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
            Join a Group
          </button>
          <button className="bg-white text-black py-3 px-6 rounded-lg shadow-md hover:bg-gray-300 transition duration-300 mt-4 md:mt-0 md:ml-4">
            Create a Group
          </button>
        </div>

        {/* Group Listings Section */}
        <div className="mt-12 w-full max-w-4xl">
          <h2 className="text-3xl font-semibold">Available Groups</h2>
          <div className="mt-4 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-black">
                  Advanced Data Structures
                </h3>
                <p className="text-gray-800">25 Members</p>
              </div>
              <button className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
                Join
              </button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-black">
                  AI & Machine Learning
                </h3>
                <p className="text-gray-800">18 Members</p>
              </div>
              <button className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
                Join
              </button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-black">
                  Web Development
                </h3>
                <p className="text-gray-800">30 Members</p>
              </div>
              <button className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
                Join
              </button>
            </div>

            {/* Add more group listings as needed */}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-gray-900 text-white py-4 flex justify-center">
        <p>&copy; 2024 tapIn. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default StudyGroups;
