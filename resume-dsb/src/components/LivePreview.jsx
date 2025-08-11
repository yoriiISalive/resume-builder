import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useResume } from '../context/ResumeContext';
import ResumePreviewTemplate from './ResumePreviewTemplate';

gsap.registerPlugin(ScrollTrigger);

const LivePreview = () => {
  const rootRef = useRef(null);
  const { resumeData, selectedTemplate } = useResume();

  useEffect(() => {
    if (rootRef.current) {
      gsap.fromTo(
        rootRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <div ref={rootRef} className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Live Preview</h2>
      </div>
      <ResumePreviewTemplate resumeData={resumeData} selectedTemplate={selectedTemplate} />
    </div>
  );
};

export default LivePreview;
