import React, { createContext, useContext, useState, useMemo } from 'react';

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    linkedin: 'linkedin.com/in/johndoe',
  });
  const [summary, setSummary] = useState('Experienced software developer with 5+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies. Proven track record of delivering scalable web applications and leading cross-functional teams to achieve project goals.');
  const [workExperience, setWorkExperience] = useState([
    {
      jobTitle: 'Senior Software Developer',
      company: 'Tech Solutions Inc.',
      startDate: 'Jan 2022',
      endDate: 'Present',
      description: 'Led development of customer-facing web applications using React and Node.js\nImplemented CI/CD pipelines reducing deployment time by 40%\nMentored junior developers and conducted code reviews'
    },
    {
      jobTitle: 'Software Developer',
      company: 'Digital Innovations LLC',
      startDate: 'Jun 2020',
      endDate: 'Dec 2021',
      description: 'Developed and maintained RESTful APIs serving 10,000+ daily users\nOptimized database queries improving application performance by 30%\nCollaborated with UX/UI designers to implement responsive designs'
    }
  ]);
  const [education, setEducation] = useState([
    {
      degree: 'Bachelor of Science in Computer Science',
      fieldOfStudy: 'Computer Science',
      institution: 'University of Technology',
      cgpa: '3.8',
      startYear: '2016',
      endYear: '2020'
    }
  ]);
  const [skills, setSkills] = useState({ 
    technical: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL'], 
    soft: ['Leadership', 'Problem Solving', 'Communication', 'Team Collaboration', 'Project Management'] 
  });
  const [projects, setProjects] = useState([
    {
      projectName: 'E-commerce Platform',
      technologies: 'React, Node.js, MongoDB, Stripe API',
      projectUrl: 'https://github.com/johndoe/ecommerce-platform',
      duration: '3 months',
      description: 'Built a full-stack e-commerce platform with payment integration\nImplemented user authentication and authorization\nAchieved 99.9% uptime with proper error handling and monitoring'
    },
    {
      projectName: 'Task Management App',
      technologies: 'React Native, Firebase, Redux',
      projectUrl: 'https://github.com/johndoe/task-manager',
      duration: '2 months',
      description: 'Developed cross-platform mobile app for task management\nIntegrated real-time synchronization using Firebase\nPublished on both iOS and Android app stores'
    }
  ]);
  const [resumeRef, setResumeRef] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('Modern');

  const resetResume = () => {
    setPersonalInfo({
      fullName: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
    });
    setSummary('');
    setWorkExperience([]);
    setEducation([]);
    setSkills({ technical: [], soft: [] });
    setProjects([]);
  };

  // Create a unified resumeData object
  const resumeData = useMemo(() => ({
    personalInfo,
    summary,
    workExperience,
    education,
    skills,
    projects,
    resumeRef,
    selectedTemplate,
  }), [personalInfo, summary, workExperience, education, skills, projects, resumeRef, selectedTemplate]);

  const value = {
    personalInfo,
    setPersonalInfo,
    summary,
    setSummary,
    workExperience,
    setWorkExperience,
    education,
    setEducation,
    skills,
    setSkills,
    projects,
    setProjects,
    resumeRef,
    setResumeRef,
    selectedTemplate,
    setSelectedTemplate,
    resumeData,
    resetResume,
  };

  return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
};
