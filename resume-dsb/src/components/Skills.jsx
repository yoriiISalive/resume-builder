import React, { useRef, useEffect } from 'react';
import FormSection from './ui/FormSection';
import SkillInput from './ui/SkillInput';
import Icon from './ui/Icon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useResume } from '../context/ResumeContext';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const rootRef = useRef(null);
  const { skills, setSkills } = useResume();

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

  const handleSkillsChange = (skillType, newSkills) => {
    setSkills((prevSkills) => ({ ...prevSkills, [skillType]: newSkills }));
  };

  return (
    <div ref={rootRef}>
      <FormSection
        title="Skills"
        action={
          <button className="text-sm text-yellow-600 font-semibold flex items-center gap-1 cursor-pointer">
            <Icon path="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" className="w-5 h-5" />
            Suggest Skills
          </button>
        }
      >
        <div className="space-y-6">
          <SkillInput
            title="Technical Skills"
            skills={skills.technical}
            setSkills={(newSkills) => handleSkillsChange('technical', newSkills)}
            color={{ bg: 'bg-blue-100', text: 'text-blue-800' }}
          />
          <SkillInput
            title="Soft Skills"
            skills={skills.soft}
            setSkills={(newSkills) => handleSkillsChange('soft', newSkills)}
            color={{ bg: 'bg-green-100', text: 'text-green-800' }}
          />
        </div>
      </FormSection>
    </div>
  );
};

export default Skills;
