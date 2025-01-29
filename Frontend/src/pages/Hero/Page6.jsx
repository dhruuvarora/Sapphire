import React from 'react';
import { assets } from "../../assets/assets";

const LearningDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Latest Modules Section */}
        <div>
          <h2 className="text-5xl font-semibold mb-6 text-teal-800">Latest Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Stock Market Module */}
            <div className="border border-black rounded-lg p-6">
              <img
                src={assets.blog1}
                alt="Stock Market Basics"
                className="w-full h-48 border border-black  mb-4 rounded"
              />
              <h3 className="text-lg font-bold mb-2">Module 1: Stock Market Basics</h3>
              <p className="text-gray-600 mb-4">
                Description: Learn the fundamentals of the stock market and how to start investing.
              </p>
              <div className="text-sm text-black font-semibold mb-4">Progress: Beginner | 3/10 Lessons Completed</div>
              <div className="text-right">
                <a href="#" className="text-blue-500 hover:underline inline-flex items-center">
                  Continue Learning
                  <span className="ml-1">›</span>
                </a>
              </div>
            </div>

            {/* Cryptocurrency Module */}
            <div className="border border-black rounded-lg p-6">
              <img
                src={assets.blog2}
                alt="Cryptocurrency"
                className="w-full h-48  border border-black  mb-4 rounded"
              />
              <h3 className="text-lg font-bold mb-2">Module 1: Understanding Cryptocurrency</h3>
              <p className="text-gray-600 mb-4">
                Description: Master the Basics of Cryptocurrency & Learn How to Invest Safely with Proven Strategies
              </p>
              <div className="text-sm text-black font-semibold mb-4">Progress: Beginner | 5/12 Lessons Completed</div>
              <div className="text-right">
                <a href="#" className="text-blue-500 hover:underline inline-flex  items-center">
                  Continue Learning
                  <span className="ml-1">›</span>
                </a>
              </div>
            </div>
          </div>

          <div className="text-right mt-4">
            <a href="#" className="text-blue-500 hover:underline inline-flex items-center">
              See more
              <span className="ml-1">›</span>
            </a>
          </div>
        </div>

        {/* Latest Blogs Section */}
        <div>
          <h2 className="text-5xl font-semibold mb-6 text-teal-800">Latest Blogs</h2>
          <div className="space-y-6">
            {/* Blog 1 */}
            <div className="bg-white border border-black rounded-lg p-6 flex">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">How to Create a Personal Budget That Works</h3>
                <p className="text-gray-600 mb-4">
                  📘 Description: Step-by-step tips to build a budget that helps you manage your finances better.
                </p>
                <div className="text-sm font-semibold">
                  📅 Author: Emily Smith | Published: Jan 5, 2025
                </div>
              </div>
              <img
                src={assets.blog3}
                alt="Budget Blog"
                className="w-32 h-32 object-cover ml-4 rounded"
              />
            </div>

            {/* Blog 2 */}
            <div className="bg-white border border-black rounded-lg p-6 flex">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Stock Market 101: A Beginner's Guide to Investing</h3>
                <p className="text-gray-600 mb-4">
                  Learn the basics of the stock market, including key terms and how to get started.
                </p>
                <div className="text-sm font-semibold">
                  📅 Author: John Doe | Published: Jan 10, 2025
                </div>
              </div>
              <img
                src={assets.blog4}
                alt="Stock Market Blog"
                className="w-32 h-32 object-cover ml-4 rounded"
              />
            </div>
          </div>

          <div className="text-right mt-4">
            <a href="#" className="text-blue-500 hover:underline inline-flex items-center">
              See more
              <span className="ml-1">›</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningDashboard;