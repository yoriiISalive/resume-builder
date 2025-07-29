import React from 'react';
import Icon from './ui/Icon';

const Header = () => (
  <div className="flex justify-between items-center mb-8">
    <div>
      <h1 className="text-3xl font-bold text-gray-800">Resume Builder</h1>
      <p className="text-gray-500">Create ATS-friendly resumes with AI suggestions</p>
    </div>
    <div className="flex gap-4">
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors">
        <Icon path="M2.036 12.322a1.012 1.012 0 010-.639l4.43-7.087a1.012 1.012 0 011.586-.215l2.25 1.406a1.012 1.012 0 01.215 1.586l-4.43 7.087a1.012 1.012 0 01-1.586.215l-2.25-1.406a1.012 1.012 0 01-.215-1.586z M19.964 12.322a1.012 1.012 0 000-.639l-4.43-7.087a1.012 1.012 0 00-1.586-.215l-2.25 1.406a1.012 1.012 0 00-.215 1.586l4.43 7.087a1.012 1.012 0 001.586.215l2.25-1.406a1.012 1.012 0 00.215-1.586z" />
        Preview
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors">
        <Icon path="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        Download
      </button>
    </div>
  </div>
);

export default Header;