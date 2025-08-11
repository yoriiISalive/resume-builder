import React, { useRef, useEffect } from 'react';
import FormSection from './ui/FormSection';
import Input from './ui/Input';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useResume } from '../context/ResumeContext';
import Icon from './ui/Icon';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const rootRef = useRef(null);
  const { education, setEducation } = useResume();

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

  const handleAddEducation = () => {
    setEducation([
      ...education,
      {
        degree: '',
        fieldOfStudy: '',
        institution: '',
        cgpa: '',
        startYear: '',
        endYear: '',
      },
    ]);
  };

  const handleRemoveEducation = (index) => {
    const newEducation = [...education];
    newEducation.splice(index, 1);
    setEducation(newEducation);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...education];
    newEducation[index][name] = value;
    setEducation(newEducation);
  };

  return (
    <div ref={rootRef}>
      <FormSection
        title="Education"
        action={
          <button
            onClick={handleAddEducation}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 cursor-pointer"
          >
            + Add Education
          </button>
        }
      >
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="space-y-6 p-4 border border-gray-200 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Degree"
                  name="degree"
                  type="text"
                  value={edu.degree}
                  onChange={(e) => handleChange(index, e)}
                />
                <Input
                  label="Field of Study"
                  name="fieldOfStudy"
                  type="text"
                  value={edu.fieldOfStudy}
                  onChange={(e) => handleChange(index, e)}
                />
                <Input
                  label="Institution"
                  name="institution"
                  type="text"
                  value={edu.institution}
                  onChange={(e) => handleChange(index, e)}
                />
                <Input
                  label="CGPA/Percentage"
                  name="cgpa"
                  type="text"
                  value={edu.cgpa}
                  onChange={(e) => handleChange(index, e)}
                />
                <Input
                  label="Start Year"
                  name="startYear"
                  type="text"
                  value={edu.startYear}
                  onChange={(e) => handleChange(index, e)}
                />
                <Input
                  label="End Year"
                  name="endYear"
                  type="text"
                  value={edu.endYear}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => handleRemoveEducation(index)}
                  className="text-red-500 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Icon path="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" className="w-4 h-4" />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </FormSection>
    </div>
  );
};

export default Education;
