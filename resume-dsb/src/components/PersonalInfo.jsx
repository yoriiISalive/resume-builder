import React, { useRef, useEffect } from 'react';
import FormSection from './ui/FormSection';
import Input from './ui/Input';
import Icon from './ui/Icon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useResume } from '../context/ResumeContext';

gsap.registerPlugin(ScrollTrigger);

const PersonalInfo = () => {
  const rootRef = useRef(null);
  const { personalInfo, setPersonalInfo } = useResume();

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

  const handleChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.id]: e.target.value });
  };

  return (
    <div ref={rootRef}>
      <FormSection 
        title="Personal Information"
        action={
          <button className="text-sm text-blue-600 font-semibold flex items-center gap-1 cursor-pointer">
            <Icon path="M9.813 15.904L9 15l.813-.904L12 12l2.187 2.096L15 15l-.813.904L12 18l-2.187-2.096zM12 21a9 9 0 100-18 9 9 0 000 18zm0-2a7 7 0 110-14 7 7 0 010 14z" className="w-5 h-5" />
            AI Suggestions
          </button>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Full Name" id="fullName" type="text" value={personalInfo.fullName} onChange={handleChange} />
          <Input label="Email" id="email" type="email" value={personalInfo.email} onChange={handleChange} />
          <Input label="Phone" id="phone" type="tel" value={personalInfo.phone} onChange={handleChange} />
          <Input label="Location" id="location" type="text" value={personalInfo.location} onChange={handleChange} />
          <div className="md:col-span-2">
            <Input label="LinkedIn Profile" id="linkedin" type="url" value={personalInfo.linkedin} onChange={handleChange} />
          </div>
        </div>
      </FormSection>
    </div>
  );
};

export default PersonalInfo;
