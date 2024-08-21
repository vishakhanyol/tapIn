import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-800 py-16 px-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-orange-500">
          About Tapln
        </h1>
        <p className="mt-4 text-lg md:text-2xl tracking-wider text-white">
          Empowering students to connect, collaborate, and succeed.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center px-6 py-12">
        <div className="max-w-4xl text-center">
          {/* Mission and Vision */}
          <section className="mb-12">
            <h2 className="text-4xl font-semibold text-orange-500">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-300">
              Tapln is dedicated to creating a collaborative platform for students to share experiences, find study groups, and improve their resumes. Our mission is to foster a community that thrives on mutual growth and support.
            </p>
          </section>

          {/* Key Features */}
          <section className="mb-12">
            <h2 className="text-4xl font-semibold text-orange-500">Key Features</h2>
            <ul className="mt-4 text-lg text-gray-300 space-y-6">
              <li>
                <span className="font-bold text-white">🔍 Interview Experiences:</span> Learn from others to better prepare.
              </li>
              <li>
                <span className="font-bold text-white">📚 Study Groups:</span> Connect with peers to excel together.
              </li>
              <li>
                <span className="font-bold text-white">📄 Resume Scoring:</span> Get feedback to improve your resume.
              </li>
            </ul>
          </section>

          {/* Call to Action */}
          <section className="mb-12">
            <h2 className="text-4xl font-semibold text-orange-500">Join Us</h2>
            <p className="mt-4 text-lg text-gray-300">
              Become a part of Tapln today and take the first step towards a successful future. Connect, collaborate, and grow with us.
            </p>
          </section>

          {/* Optional Image */}
          <div className="mt-8">
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Community"
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-gray-900 text-gray-400 py-4 flex justify-center">
        <p>&copy; 2024 Tapln. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
