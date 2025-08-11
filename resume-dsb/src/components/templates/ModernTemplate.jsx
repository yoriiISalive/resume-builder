import React from 'react';

const ModernTemplate = React.forwardRef(({ resumeData }, ref) => {
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
    <div id="resume-content" ref={ref} className="border border-gray-200 rounded-lg p-4 text-sm text-gray-700 min-h-[200px] max-h-[60vh] overflow-y-auto bg-white">
      {/* Header Section */}
      {hasPersonalInfo && (
        <div className="text-center mb-6 border-b border-gray-200 pb-4">
          {personalInfo.fullName && (
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{personalInfo.fullName}</h3>
          )}
          <div className="text-gray-600">
            {[personalInfo.email, personalInfo.phone, personalInfo.location].filter(Boolean).join(' | ')}
          </div>
          {personalInfo.linkedin && (
            <div className="text-blue-600 mt-1">{personalInfo.linkedin}</div>
          )}
        </div>
      )}

      {/* Professional Summary */}
      {summary && (
        <div className="mb-6">
          <h4 className="font-bold text-blue-600 border-b-2 border-blue-600 pb-1 mb-3 uppercase tracking-wide">
            Professional Summary
          </h4>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Work Experience */}
      {workExperience.length > 0 && (
        <div className="mb-6">
          <h4 className="font-bold text-blue-600 border-b-2 border-blue-600 pb-1 mb-3 uppercase tracking-wide">
            Experience
          </h4>
          {workExperience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <span className="font-semibold text-gray-800">{exp.jobTitle || 'Job Title'}</span>
                <span className="text-gray-600 text-sm">
                  {exp.startDate || 'Start'} - {exp.endDate || 'End'}
                </span>
              </div>
              <p className="italic text-gray-600 mb-2">{exp.company || 'Company Name'}</p>
              {exp.description && (
                <ul className="list-disc list-inside text-sm space-y-1">
                  {exp.description.split('\n').filter(line => line.trim()).map((line, i) => (
                    <li key={i} className="text-gray-700">{line.trim()}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-6">
          <h4 className="font-bold text-blue-600 border-b-2 border-blue-600 pb-1 mb-3 uppercase tracking-wide">
            Education
          </h4>
          {education.map((edu, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-start mb-1">
                <span className="font-semibold text-gray-800">{edu.degree || 'Degree'}</span>
                <span className="text-gray-600 text-sm">
                  {edu.startYear || 'Start'} - {edu.endYear || 'End'}
                </span>
              </div>
              <p className="text-gray-600">
                {[edu.fieldOfStudy, edu.institution, edu.cgpa && `CGPA: ${edu.cgpa}`].filter(Boolean).join(' | ')}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {(skills.technical.length > 0 || skills.soft.length > 0) && (
        <div className="mb-6">
          <h4 className="font-bold text-blue-600 border-b-2 border-blue-600 pb-1 mb-3 uppercase tracking-wide">
            Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {skills.technical.map((skill, index) => (
              <span key={`tech-${index}`} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
            {skills.soft.map((skill, index) => (
              <span key={`soft-${index}`} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div>
          <h4 className="font-bold text-blue-600 border-b-2 border-blue-600 pb-1 mb-3 uppercase tracking-wide">
            Projects
          </h4>
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <span className="font-semibold text-gray-800">{project.projectName || 'Project Name'}</span>
                {project.duration && (
                  <span className="text-gray-600 text-sm">{project.duration}</span>
                )}
              </div>
              {project.technologies && (
                <p className="italic text-gray-600 mb-1">{project.technologies}</p>
              )}
              {project.projectUrl && (
                <a 
                  href={project.projectUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-sm block mb-2"
                >
                  {project.projectUrl}
                </a>
              )}
              {project.description && (
                <ul className="list-disc list-inside text-sm space-y-1">
                  {project.description.split('\n').filter(line => line.trim()).map((line, i) => (
                    <li key={i} className="text-gray-700">{line.trim()}</li>
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

export default ModernTemplate;