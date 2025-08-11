import React from 'react';

const ClassicTemplate = React.forwardRef(({ resumeData }, ref) => {
  if (!resumeData) {
    return <div className="text-center p-8 text-gray-500">Loading resume preview...</div>;
  }

  const { 
    personalInfo = {}, 
    summary = '', 
    workExperience = [], 
    education = [], 
    skills = { technical: [], soft: [] }, 
    projects = [] 
  } = resumeData;

  const hasPersonalInfo = personalInfo.fullName || personalInfo.email || personalInfo.phone;
  const hasContent = hasPersonalInfo || summary || workExperience.length > 0 || education.length > 0 || 
                    skills.technical.length > 0 || skills.soft.length > 0 || projects.length > 0;

  if (!hasContent) {
    return (
      <div className="text-center p-8 text-gray-500 border border-gray-200 rounded-lg">
        <p className="text-lg mb-2">Your resume preview will appear here</p>
        <p className="text-sm">Start filling out the form to see your resume come to life!</p>
      </div>
    );
  }

  return (
    <div id="resume-content" ref={ref} className="border border-gray-200 rounded-lg p-6 text-sm text-gray-800 min-h-[200px] max-h-[60vh] overflow-y-auto bg-white font-serif">
      {/* Header Section - Classic Style */}
      {hasPersonalInfo && (
        <div className="text-center mb-8 pb-4 border-b-2 border-gray-800">
          {personalInfo.fullName && (
            <h1 className="text-3xl font-bold text-gray-900 mb-3 uppercase tracking-wider">{personalInfo.fullName}</h1>
          )}
          <div className="text-gray-700 text-base">
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.phone && <span> • {personalInfo.phone}</span>}
            {personalInfo.location && <span> • {personalInfo.location}</span>}
          </div>
          {personalInfo.linkedin && (
            <div className="text-gray-700 mt-1">{personalInfo.linkedin}</div>
          )}
        </div>
      )}

      {/* Professional Summary */}
      {summary && (
        <div className="mb-8">
          <h2 className="font-bold text-gray-900 text-lg mb-3 uppercase tracking-wide border-b border-gray-400 pb-1">
            Professional Summary
          </h2>
          <p className="text-gray-800 leading-relaxed text-justify">{summary}</p>
        </div>
      )}

      {/* Work Experience */}
      {workExperience.length > 0 && (
        <div className="mb-8">
          <h2 className="font-bold text-gray-900 text-lg mb-4 uppercase tracking-wide border-b border-gray-400 pb-1">
            Professional Experience
          </h2>
          {workExperience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900 text-base">{exp.jobTitle || 'Job Title'}</h3>
                  <p className="text-gray-700 font-medium">{exp.company || 'Company Name'}</p>
                </div>
                <div className="text-right">
                  <span className="text-gray-600 font-medium">
                    {exp.startDate || 'Start'} - {exp.endDate || 'End'}
                  </span>
                </div>
              </div>
              {exp.description && (
                <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                  {exp.description.split('\n').filter(line => line.trim()).map((line, i) => (
                    <li key={i} className="text-gray-800">{line.trim()}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-8">
          <h2 className="font-bold text-gray-900 text-lg mb-4 uppercase tracking-wide border-b border-gray-400 pb-1">
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-bold text-gray-900">{edu.degree || 'Degree'}</h3>
                  <p className="text-gray-700">{edu.fieldOfStudy && `Major: ${edu.fieldOfStudy}`}</p>
                  <p className="text-gray-700">{edu.institution || 'Institution'}</p>
                </div>
                <div className="text-right">
                  <span className="text-gray-600 font-medium">
                    {edu.startYear || 'Start'} - {edu.endYear || 'End'}
                  </span>
                  {edu.cgpa && (
                    <p className="text-gray-600 text-sm">CGPA: {edu.cgpa}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {(skills.technical.length > 0 || skills.soft.length > 0) && (
        <div className="mb-8">
          <h2 className="font-bold text-gray-900 text-lg mb-4 uppercase tracking-wide border-b border-gray-400 pb-1">
            Skills & Competencies
          </h2>
          {skills.technical.length > 0 && (
            <div className="mb-3">
              <h3 className="font-semibold text-gray-800 mb-2">Technical Skills:</h3>
              <p className="text-gray-700">{skills.technical.join(' • ')}</p>
            </div>
          )}
          {skills.soft.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Core Competencies:</h3>
              <p className="text-gray-700">{skills.soft.join(' • ')}</p>
            </div>
          )}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-4 uppercase tracking-wide border-b border-gray-400 pb-1">
            Notable Projects
          </h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">{project.projectName || 'Project Name'}</h3>
                  {project.technologies && (
                    <p className="text-gray-700 font-medium">Technologies: {project.technologies}</p>
                  )}
                </div>
                {project.duration && (
                  <span className="text-gray-600 font-medium">{project.duration}</span>
                )}
              </div>
              {project.projectUrl && (
                <p className="text-gray-600 text-sm mb-2">
                  <strong>URL:</strong> {project.projectUrl}
                </p>
              )}
              {project.description && (
                <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                  {project.description.split('\n').filter(line => line.trim()).map((line, i) => (
                    <li key={i} className="text-gray-800">{line.trim()}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default ClassicTemplate;