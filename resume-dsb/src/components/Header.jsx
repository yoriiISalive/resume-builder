import React, { useState, useRef, useEffect } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import DownloadResumeUnified from './DownloadResumeUnified';
import PopupModal from './PopupModal';
import { useResume } from '../context/ResumeContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [showPreview, setShowPreview] = useState(false);
  const rootRef = useRef(null);
  const { resumeData, selectedTemplate } = useResume();

  useEffect(() => {
    if (rootRef.current) {
      gsap.fromTo(
        rootRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <>
      <div ref={rootRef} className="flex flex-col sm:flex-row justify-between items-left mb-8">
        <div className="text-left sm:text-left mb-4 sm:mb-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Resume Builder</h1>
          <p className="text-sm sm:text-base text-gray-500">Create ATS-friendly resumes with AI suggestions</p>
        </div>
        <div className="flex gap-4">
          <button onClick={() => setShowPreview(true)} className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors cursor-pointer">
            <EyeIcon className="h-5 w-5" />
            Preview
          </button>
          <DownloadResumeUnified />
        </div>
      </div>
      <PopupModal 
        isVisible={showPreview} 
        onClose={() => setShowPreview(false)} 
        resumeData={resumeData} 
        selectedTemplate={selectedTemplate} 
      />
    </>
  );
};

export default Header;