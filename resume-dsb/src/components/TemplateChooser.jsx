import React, { useRef, useEffect } from 'react';
import FormSection from './ui/FormSection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useResume } from '../context/ResumeContext';

gsap.registerPlugin(ScrollTrigger);

const TemplateChooser = () => {
    const { selectedTemplate, setSelectedTemplate, resetResume } = useResume();
    const templates = ['Modern', 'Classic', 'Creative'];
    const descriptions = {
      Modern: 'Clean and professional',
      Classic: 'Traditional format',
      Creative: 'Stand out design',
    };
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

    const handleTemplateSelect = (template) => {
      setSelectedTemplate(template);
    };
  
    const startOverButton = (
      <button 
        onClick={resetResume} 
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Start Over
      </button>
    );

    return (
      <div ref={rootRef}>
        <FormSection title="Choose Template" action={startOverButton}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {templates.map(template => (
              <div
                key={template}
                onClick={() => handleTemplateSelect(template)}
                className={`cursor-pointer rounded-lg p-4 transition-all ${selectedTemplate === template ? 'border-2 border-blue-500 bg-blue-50' : 'border border-gray-300 hover:border-blue-400'}`}
              >
                <div className="bg-white border border-gray-200 h-40 w-full rounded-md mb-4 flex items-center justify-center cursor-pointer overflow-hidden">
                  {template === 'Modern' && (
                    <div className="w-full h-full p-2 text-xs">
                      <div className="text-center border-b pb-1 mb-2">
                        <div className="font-bold text-blue-600">JOHN DOE</div>
                        <div className="text-gray-500 text-xs">john@email.com</div>
                      </div>
                      <div className="mb-2">
                        <div className="text-blue-600 font-bold text-xs border-b border-blue-600">SUMMARY</div>
                        <div className="text-gray-400 text-xs mt-1">Professional summary...</div>
                      </div>
                      <div>
                        <div className="text-blue-600 font-bold text-xs border-b border-blue-600">EXPERIENCE</div>
                        <div className="text-gray-400 text-xs mt-1">Job experience...</div>
                      </div>
                    </div>
                  )}
                  {template === 'Classic' && (
                    <div className="w-full h-full p-2 text-xs font-serif">
                      <div className="text-center border-b-2 border-gray-800 pb-1 mb-2">
                        <div className="font-bold text-gray-900 uppercase">JOHN DOE</div>
                        <div className="text-gray-600 text-xs">john@email.com</div>
                      </div>
                      <div className="mb-2">
                        <div className="text-gray-900 font-bold text-xs border-b border-gray-400 uppercase">Summary</div>
                        <div className="text-gray-500 text-xs mt-1">Professional summary...</div>
                      </div>
                      <div>
                        <div className="text-gray-900 font-bold text-xs border-b border-gray-400 uppercase">Experience</div>
                        <div className="text-gray-500 text-xs mt-1">Job experience...</div>
                      </div>
                    </div>
                  )}
                  {template === 'Creative' && (
                    <div className="w-full h-full flex text-xs">
                      <div className="w-1/3 bg-gradient-to-b from-purple-600 to-indigo-700 text-white p-1">
                        <div className="font-bold text-xs mb-1">JOHN DOE</div>
                        <div className="text-xs mb-2">📧 john@email.com</div>
                        <div className="text-xs font-bold">💡 SKILLS</div>
                        <div className="bg-white bg-opacity-20 rounded px-1 text-xs mt-1">React</div>
                      </div>
                      <div className="w-2/3 p-1">
                        <div className="text-purple-700 font-bold text-xs mb-1">🚀 SUMMARY</div>
                        <div className="text-gray-500 text-xs mb-2">Professional summary...</div>
                        <div className="text-purple-700 font-bold text-xs">💼 EXPERIENCE</div>
                        <div className="text-gray-500 text-xs">Job experience...</div>
                      </div>
                    </div>
                  )}
                </div>
                <h3 className={`text-gray-800 font-semibold ${selectedTemplate === template && 'font-bold'}`}>{template}</h3>
                <p className="text-sm text-gray-500">{descriptions[template]}</p>
              </div>
            ))}
          </div>
        </FormSection>
      </div>
    );
};

export default TemplateChooser;
