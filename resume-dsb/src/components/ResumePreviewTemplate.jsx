
import React from 'react';
import { useResume } from '../context/ResumeContext';

const ResumePreviewTemplate = ({ resumeData, selectedTemplate }) => {
  if (!resumeData) {
    return <div className="text-center p-8">Loading resume preview...</div>;
  }

  const { 
    personalInfo = {}, 
    summary = '', 
    workExperience = [], 
    education = [], 
    skills = { technical: [], soft: [] }, 
    projects = [] 
  } = resumeData;

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'Classic':
        return renderClassicTemplate();
      case 'Creative':
        return renderCreativeTemplate();
      default:
        return renderModernTemplate();
    }
  };

  const renderModernTemplate = () => (
    <div className="border border-gray-200 rounded-lg p-2 sm:p-4 text-xs sm:text-sm text-gray-700">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold">{personalInfo.fullName}</h3>
        <p>
          {personalInfo.email} | {personalInfo.phone} | {personalInfo.location}
        </p>
        <p>{personalInfo.linkedin}</p>
      </div>
      <div className="mb-4">
        <h4 className="font-bold text-blue-600 border-b-2 border-blue-600 pb-1 mb-2">PROFESSIONAL SUMMARY</h4>
        <p>{summary}</p>
      </div>
      <div className="mb-4">
        <h4 className="font-bold text-blue-600 border-b-2 border-blue-600 pb-1 mb-2">EXPERIENCE</h4>
        {workExperience.map((exp, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between font-semibold">
              <span>{exp.jobTitle}</span>
              <span>
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <p className="italic mb-1">{exp.company}</p>
            <ul className="list-disc list-inside text-xs">
              {exp.description.split('\n').map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h4 className="font-bold text-blue-600 border-b-2 border-blue-600 pb-1 mb-2">EDUCATION</h4>
        {education.map((edu, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between font-semibold">
              <span>{edu.degree}</span>
              <span>
                {edu.startYear} - {edu.endYear}
              </span>
            </div>
            <p className="italic">
              {edu.fieldOfStudy} | {edu.institution} | CGPA: {edu.cgpa}
            </p>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h4 className="font-bold text-blue-600 border-b-2 border-blue-600 pb-1 mb-2">SKILLS</h4>
        <div className="flex flex-wrap gap-2">
          {skills.technical.map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              {skill}
            </span>
          ))}
          {skills.soft.map((skill, index) => (
            <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-bold text-blue-600 border-b-2 border-blue-600 pb-1 mb-2">PROJECTS</h4>
        {projects.map((project, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between font-semibold">
              <span>{project.projectName}</span>
              <span>{project.duration}</span>
            </div>
            <p className="italic mb-1">{project.technologies}</p>
            <a href={project.projectUrl} className="text-blue-500 hover:underline">
              {project.projectUrl}
            </a>
            <ul className="list-disc list-inside text-xs">
              {project.description.split('\n').map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  const renderClassicTemplate = () => (
    <div className="border border-gray-200 rounded-lg p-2 sm:p-4 text-xs sm:text-sm text-gray-700 font-serif">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold uppercase">{personalInfo.fullName}</h3>
        <p>
          {personalInfo.email} | {personalInfo.phone} | {personalInfo.location}
        </p>
        <p>{personalInfo.linkedin}</p>
      </div>
      <div className="mb-4">
        <h4 className="font-bold text-gray-800 border-b-2 border-gray-800 pb-1 mb-2 uppercase">Professional Summary</h4>
        <p>{summary}</p>
      </div>
      <div className="mb-4">
        <h4 className="font-bold text-gray-800 border-b-2 border-gray-800 pb-1 mb-2 uppercase">Experience</h4>
        {workExperience.map((exp, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between font-semibold">
              <span>{exp.jobTitle}</span>
              <span>
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <p className="italic mb-1">{exp.company}</p>
            <ul className="list-disc list-inside text-xs">
              {exp.description.split('\n').map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h4 className="font-bold text-gray-800 border-b-2 border-gray-800 pb-1 mb-2 uppercase">Education</h4>
        {education.map((edu, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between font-semibold">
              <span>{edu.degree}</span>
              <span>
                {edu.startYear} - {edu.endYear}
              </span>
            </div>
            <p className="italic">
              {edu.fieldOfStudy} | {edu.institution} | CGPA: {edu.cgpa}
            </p>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h4 className="font-bold text-gray-800 border-b-2 border-gray-800 pb-1 mb-2 uppercase">Skills</h4>
        <div className="flex flex-wrap gap-2">
          {skills.technical.map((skill, index) => (
            <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
              {skill}
            </span>
          ))}
          {skills.soft.map((skill, index) => (
            <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-bold text-gray-800 border-b-2 border-gray-800 pb-1 mb-2 uppercase">Projects</h4>
        {projects.map((project, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between font-semibold">
              <span>{project.projectName}</span>
              <span>{project.duration}</span>
            </div>
            <p className="italic mb-1">{project.technologies}</p>
            <a href={project.projectUrl} className="text-blue-500 hover:underline">
              {project.projectUrl}
            </a>
            <ul className="list-disc list-inside text-xs">
              {project.description.split('\n').map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCreativeTemplate = () => (
    <div className="border border-gray-200 rounded-lg p-2 sm:p-4 text-xs sm:text-sm text-gray-700 flex">
      <div className="w-1/3 bg-gradient-to-b from-purple-600 to-indigo-700 text-white p-4 rounded-l-lg">
        <h3 className="text-xl font-bold mb-4">{personalInfo.fullName}</h3>
        <p className="text-sm mb-2">📧 {personalInfo.email}</p>
        <p className="text-sm mb-2">📞 {personalInfo.phone}</p>
        <p className="text-sm mb-4">📍 {personalInfo.location}</p>
        {personalInfo.linkedin && <p className="text-sm mb-4">🔗 {personalInfo.linkedin}</p>}

        <h4 className="font-bold text-lg mb-2 border-b border-white pb-1">SKILLS</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.technical.map((skill, index) => (
            <span key={index} className="bg-white bg-opacity-20 rounded px-2 py-1 text-xs">
              {skill}
            </span>
          ))}
          {skills.soft.map((skill, index) => (
            <span key={index} className="bg-white bg-opacity-20 rounded px-2 py-1 text-xs">
              {skill}
            </span>
          ))}
        </div>

        <h4 className="font-bold text-lg mb-2 border-b border-white pb-1">EDUCATION</h4>
        {education.map((edu, index) => (
          <div key={index} className="mb-2">
            <p className="font-semibold">{edu.degree}</p>
            <p className="italic text-sm">{edu.institution}</p>
            <p className="text-xs">{edu.startYear} - {edu.endYear}</p>
          </div>
        ))}
      </div>

      <div className="w-2/3 p-4">
        <h4 className="font-bold text-blue-600 text-lg mb-2 border-b-2 border-blue-600 pb-1">PROFESSIONAL SUMMARY</h4>
        <p className="mb-4">{summary}</p>

        <h4 className="font-bold text-blue-600 text-lg mb-2 border-b-2 border-blue-600 pb-1">EXPERIENCE</h4>
        {workExperience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between font-semibold">
              <span>{exp.jobTitle} at {exp.company}</span>
              <span>{exp.startDate} - {exp.endDate}</span>
            </div>
            <ul className="list-disc list-inside text-sm">
              {exp.description.split('\n').map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}

        <h4 className="font-bold text-blue-600 text-lg mb-2 border-b-2 border-blue-600 pb-1">PROJECTS</h4>
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between font-semibold">
              <span>{project.projectName}</span>
              <span>{project.duration}</span>
            </div>
            <p className="italic text-sm mb-1">{project.technologies}</p>
            <a href={project.projectUrl} className="text-blue-500 hover:underline text-sm">
              {project.projectUrl}
            </a>
            <ul className="list-disc list-inside text-sm">
              {project.description.split('\n').map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div id={`resume-content-${selectedTemplate}`} className="min-h-[200px] max-h-[60vh] overflow-y-auto">
      {(() => {
        switch (selectedTemplate) {
          case 'Classic':
            return renderClassicTemplate();
          case 'Creative':
            return renderCreativeTemplate();
          case 'Modern':
          default:
            return renderModernTemplate();
        }
      })()}
    </div>
  );
};

export default ResumePreviewTemplate;
