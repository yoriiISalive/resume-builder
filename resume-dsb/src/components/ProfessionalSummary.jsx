import React, { useRef, useEffect } from 'react';
import FormSection from './ui/FormSection';
import Icon from './ui/Icon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useResume } from '../context/ResumeContext';

gsap.registerPlugin(ScrollTrigger);

const ProfessionalSummary = () => {
  const rootRef = useRef(null);
  const { summary, setSummary } = useResume();

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
    <div ref={rootRef}>
      <FormSection 
        title="Professional Summary"
        action={
          <button className="text-sm text-blue-600 font-semibold flex items-center gap-1 cursor-pointer">
            <Icon path="M9.953 1.553a1 1 0 011.094 0l1.28 1.28a1 1 0 001.414 0l1.28-1.28a1 1 0 011.094 0l1.28 1.28a1 1 0 001.414 0l1.28-1.28a1 1 0 011.094 0l1.28 1.28a1 1 0 001.414 0l.905-.905a1 1 0 011.414 1.414l-.905.905a1 1 0 000 1.414l1.28 1.28a1 1 0 010 1.094l-1.28 1.28a1 1 0 000 1.414l1.28 1.28a1 1 0 010 1.094l-1.28 1.28a1 1 0 000 1.414l.905.905a1 1 0 11-1.414 1.414l-.905-.905a1 1 0 00-1.414 0l-1.28 1.28a1 1 0 01-1.094 0l-1.28-1.28a1 1 0 00-1.414 0l-1.28 1.28a1 1 0 01-1.094 0l-1.28-1.28a1 1 0 00-1.414 0l-1.28 1.28a1 1 0 01-1.094 0l-1.28-1.28a1 1 0 00-1.414 0l-.905-.905a1 1 0 11-1.414-1.414l.905-.905a1 1 0 000-1.414l-1.28-1.28a1 1 0 010-1.094l1.28-1.28a1 1 0 000-1.414l-1.28-1.28a1 1 0 010-1.094l1.28-1.28a1 1 0 000-1.414l-.905-.905a1 1 0 011.414-1.414l.905.905a1 1 0 001.414 0l1.28-1.28z" className="w-5 h-5" />
            Generate with AI
          </button>
        }
      >
        <textarea 
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 h-32"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <div className="flex justify-between items-center mt-2 text-sm">
          <p className="text-gray-500">Character count: {summary.length}/500</p>
          <p className="text-green-600 font-semibold flex items-center gap-1">
            <Icon path="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-5 h-5"/>
            ATS Optimized
          </p>
        </div>
      </FormSection>
    </div>
  );
};

export default ProfessionalSummary;
