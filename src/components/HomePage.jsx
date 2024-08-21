import React from "react";

const HomePage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      {/* Main Content */}
      <main className="flex-grow flex w-full justify-between items-start p-10">
        {/* Left Side: Heading */}
        <div className="w-1/2 text-left">
          <h1 className="text-8xl font-bold">
            Connect, Collaborate, and Succeed.
          </h1>
        </div>

        {/* Right Side: Random Subheadings */}
        <div className="w-1/2 relative flex justify-center items-center">
          <div className="absolute top-10 right-20 text-gray-400 flex flex-col text-right">
            <span className="text-sm tracking-wider">
              <span className="font-bold text-gray-600">From</span> Campus Talks
            </span>
            <span className="text-sm tracking-wider mt-1">
              <span className="font-bold text-gray-600">To</span> Career Walks
            </span>
          </div>

          <div className="absolute top-60 bottom-10 right-40 text-sm text-gray-400">
            <div className="flex flex-col items-center mb-2">
              <div className="flex justify-between w-full max-w-xs">
                <div className="flex flex-col items-center">
                  <i className="fas fa-seedling text-xl mb-1"></i>
                  <span>Grow.</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-graduation-cap text-xl mb-1"></i>
                  <span>Learn.</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-briefcase text-xl mb-1"></i>
                  <span>Work.</span>
                </div>
              </div>
              <div className="mt-2">Tapln Style!</div>
            </div>
          </div>
        </div>
      </main>

      {/* Cards Section */}
      <section className="flex justify-center space-x-6 mt-8">
        {/* Card 1 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-72">
          <img
            src="https://images.unsplash.com/photo-1624916912082-ba582456d162?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Groups that Grow Together"
            className="w-full h-40 object-cover rounded-md"
          />
          <h2 className="mt-4 text-lg font-semibold">
            Groups That Grow Together, Succeed Together!
          </h2>
        </div>

        {/* Card 2 - Larger Middle Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-96">
          <img
            src="https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Collective Wisdom"
            className="w-full h-56 object-cover rounded-md"
          />
          <h2 className="mt-4 text-lg font-semibold">
            Collective Wisdom, One Experience at a Time!
          </h2>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-72">
          <img
            src="https://animationexplainers.com/wp-content/uploads/2021/10/animated-resume.jpg"
            alt="Craft Your Future"
            className="w-full h-40 object-cover rounded-md"
          />
          <h2 className="mt-4 text-lg font-semibold">
            Craft Your Future, One Resume at a Time!
          </h2>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gray-900 text-white py-4 mt-8">
        <div className="flex justify-center">
          <p>&copy; 2024 Tapln. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
