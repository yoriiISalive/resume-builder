import React, { useEffect } from 'react';
import ResumePreviewTemplate from './ResumePreviewTemplate';

const PopupModal = ({ onClose, isVisible, resumeData }) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div
        className={`bg-white rounded-xl shadow-2xl w-full max-w-4xl h-auto max-h-[90vh] p-4 relative flex flex-col transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <div className="flex-shrink-0 flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold text-gray-800">Resume Preview</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              aria-label="Close popup"
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold cursor-pointer"
            >
              &times;
            </button>
          </div>
        </div>
        <div id="resume-preview-content" className="flex-grow overflow-y-auto">
          <ResumePreviewTemplate resumeData={resumeData} />
        </div>
      </div>
    </div>
  );
};

export default PopupModal;