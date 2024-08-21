import React, { useState } from "react";

const InterviewExperience = () => {
  const [experience, setExperience] = useState("");

  const interviewData = [
    {
      company: "Google",
      role: "Software Development Engineer",
      type: "Full-Time Employment",
      description:
        "The process involved a technical phone screen followed by an onsite interview with four rounds. Topics covered included data structures, system design, and coding challenges.",
    },
    {
      company: "ZS Associates",
      role: "Program Manager",
      type: "Full-Time Employment",
      description:
        "Included an initial HR screening followed by 3 technical rounds focused on problem-solving, project management, and behavioral skills. System design and stakeholder management were crucial aspects.",
    },
    {
      company: "Arista",
      role: "Data Scientist",
      type: "Full-Time Employment",
      description:
        "Started with a technical test on Python, followed by rounds focusing on machine learning concepts, statistics, and case studies related to data handling.",
    },
    {
      company: "Apple",
      role: "Hardware Engineer",
      type: "Internship",
      description:
        "The interview included a technical test followed by technical discussions with team members. Key areas included circuit design, troubleshooting, and hardware testing.",
    },
    {
      company: "Zomato",
      role: "Product Manager",
      type: "Full-Time Employment",
      description:
        "Three rounds focused on product strategy, problem-solving, and prioritization. The final round was with a VP discussing high-level product vision and roadmap planning.",
    },
    {
      company: "Salesforce",
      role: "Solution Architect",
      type: "Full-Time Employment",
      description:
        "Started with a case study on system architecture, followed by technical and managerial rounds covering cloud computing, solution design, and customer interaction.",
    },
    {
      company: "PharmEasy",
      role: "Backend Engineer",
      type: "Full-Time Employment",
      description:
        "Interview focused on distributed systems, scalability, and backend architecture. There were three rounds of coding challenges and two rounds of system design.",
    },
    {
      company: "Barclays",
      role: "Software Engineer",
      type: "Internship",
      description:
        "Included an online technical test, followed by technical rounds on mechanical design and a final round covering manufacturing processes and sustainability in engineering solutions.",
    },
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col justify-between text-white">
      <div className="flex flex-col items-center text-center">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-start items-center">
            <div className="md:w-9/12 text-left md:pl-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Tales of Triumph and Trials: Your Interview Adventure Awaits!
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-400">
                Dive into the real stories behind the offer letters. Learn,
                laugh, and get inspired.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-6xl mt-12">
          <div className="flex justify-around mb-4">
            <select className="bg-orange-500 text-black p-3 rounded-lg">
              <option>Company</option>
              {/* Add options */}
            </select>
            <select className="bg-orange-500 text-black p-3 rounded-lg">
              <option>Role</option>
              {/* Add options */}
            </select>
            <select className="bg-orange-500 text-black p-3 rounded-lg">
              <option>Type</option>
              {/* Add options */}
            </select>
            <button className="bg-white text-black p-3 rounded-lg">
              Search
            </button>
          </div>

          {/* Interview Experience Table */}
          <div className="bg-gray-900 p-4 rounded-lg">
            <table className="w-full text-left table-fixed">
              <thead>
                <tr className="text-orange-500">
                  <th className="w-1/4">Company</th>
                  <th className="w-1/4">Role</th>
                  <th className="w-1/4">Type</th>
                  <th className="w-1/2">Description</th>
                </tr>
              </thead>
              <tbody>
                {interviewData.map((entry, index) => (
                  <tr
                    key={index}
                    className="text-white border-t border-gray-700"
                  >
                    <td className="py-4">{entry.company}</td>
                    <td>{entry.role}</td>
                    <td>{entry.type}</td>
                    <td>{entry.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Submission Form */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-orange-500">
            Every Story Has a Lesson, What's Yours?
          </h2>
          <input
            type="text"
            className="mt-4 p-4 w-96 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Share Your Experience.."
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-gray-900 text-white py-4 mt-8">
        <div className="flex justify-center">
          <p>&copy; 2024 Tapln. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default InterviewExperience;
