import React from 'react';

const AiResumeScore = () => (
  <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between">
    <div className="flex items-center gap-6">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="3"
          />
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#4f46e5"
            strokeWidth="3"
            strokeDasharray="85, 100"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-blue-600">85</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800">AI Resume Score</h2>
        <p className="text-gray-500">Your resume is performing well! Consider adding more projects.</p>
      </div>
    </div>
    <div className="text-right">
      <div className="flex items-center justify-end gap-4">
        <span className="text-gray-600">ATS Compatibility</span>
        <span className="font-semibold text-green-500">Excellent</span>
      </div>
      <div className="flex items-center justify-end gap-4">
        <span className="text-gray-600">Skills Match</span>
        <span className="font-semibold text-blue-500">Good</span>
      </div>
      <div className="flex items-center justify-end gap-4">
        <span className="text-gray-600">Experience</span>
        <span className="font-semibold text-orange-500">Average</span>
      </div>
    </div>
  </div>
);

export default AiResumeScore;