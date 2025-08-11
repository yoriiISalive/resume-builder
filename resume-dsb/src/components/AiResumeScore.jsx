import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AiResumeScore = () => {
  const rootRef = useRef(null);

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
    <div
      ref={rootRef}
      className="bg-white p-4 md:p-6 rounded-xl shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0"
    >
      <div className="flex items-start gap-4 md:gap-6 mb-4 md:mb-0 w-full md:w-auto">
        <div className="relative w-20 h-20 md:w-24 md:h-24">
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
      <div className="w-full md:w-auto text-left md:text-right">
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="flex items-center justify-between md:justify-start gap-2 md:gap-4">
            <span className="text-gray-600">ATS Compatibility</span>
            <span className="font-semibold text-green-500">Excellent</span>
          </div>
          <div className="flex items-center justify-between md:justify-start gap-2 md:gap-4">
            <span className="text-gray-600">Skills Match</span>
            <span className="font-semibold text-blue-500">Good</span>
          </div>
          <div className="flex items-center justify-between md:justify-start gap-2 md:gap-4">
            <span className="text-gray-600">Experience</span>
            <span className="font-semibold text-orange-500">Average</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiResumeScore;
