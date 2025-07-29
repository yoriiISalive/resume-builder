import React from 'react';
import Icon from './ui/Icon';

const LivePreview = () => (
    <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Live Preview</h2>
            <button className="text-sm text-blue-600 font-semibold flex items-center gap-1">
                <Icon path="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" className="w-5 h-5" />
                Full View
            </button>
        </div>
        <div className="border border-gray-200 rounded-lg p-2 sm:p-4 text-xs sm:text-sm text-gray-700 min-h-[200px] max-h-[60vh] md:h-[500px] overflow-y-auto">
            <div className="text-center mb-4">
                <h3 className="text-xl font-bold">John Doe</h3>
                <p>john.doe@email.com | +1 (555) 123-4567 | San Francisco, CA</p>
                <p>linkedin.com/in/johndoe</p>
            </div>
            <div className="mb-4">
                <h4 className="font-bold text-blue-600 border-b-2 border-blue-600 pb-1 mb-2">PROFESSIONAL SUMMARY</h4>
                <p>Passionate software engineer with 3+ years of experience in full-stack development...</p>
            </div>
            <div className="mb-4">
                <h4 className="font-bold text-blue-600 border-b-2 border-blue-600 pb-1 mb-2">EXPERIENCE</h4>
                <div className="flex justify-between font-semibold">
                    <span>Senior Software Engineer</span>
                    <span>2021-2024</span>
                </div>
                <p className="italic mb-1">TechCorp Solutions</p>
                <ul className="list-disc list-inside text-xs">
                    <li>Led development of microservices architecture</li>
                    <li>Improved application performance by 40%</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-blue-600 border-b-2 border-blue-600 pb-1 mb-2">EDUCATION</h4>
                <div className="flex justify-between font-semibold">
                    <span>Bachelor of Technology</span>
                    <span>2017-2021</span>
                </div>
                <p className="italic">Computer Science | University of Technology | CGPA: 8.7/10</p>
            </div>
        </div>
    </div>
);

export default LivePreview;