import React from 'react';

const CreativeTemplate = React.forwardRef(({ resumeData }, ref) => {
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
    <div id="resume-content" ref={ref} className="border border-gray-200 rounded-lg overflow-hidden text-sm min-h-[200px] max-h-[60vh] overflow-y-auto bg-white">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-1/3 bg-gradient-to-b from-purple-600 to-indigo-700 text-white p-6">
          {/* Header Section */}
          {hasPersonalInfo && (
            <div className="mb-8">
              {personalInfo.fullName && (
                <h1 className="text-2xl font-bold mb-4 leading-tight">{personalInfo.fullName}</h1>
              )}
              <div className="space-y-2 text-sm">
                {personalInfo.email && (
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-2">📧</span>
                    <span className="break-all">{personalInfo.email}</span>
                  </div>
                )}
                {personalInfo.phone && (
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-2">📱</span>
                    <span>{personalInfo.phone}</span>
                  </div>
                )}
                {personalInfo.location && (
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-2">📍</span>
                    <span>{personalInfo.location}</span>
                  </div>
                )}
                {personalInfo.linkedin && (
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-2">🔗</span>
                    <span className="break-all text-xs">{personalInfo.linkedin}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Skills Section */}
          {(skills.technical.length > 0 || skills.soft.length > 0) && (
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-4 border-b-2 border-white pb-2">
                💡 SKILLS
              </h2>
              {skills.technical.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-semibold mb-2 text-purple-200">Technical</h3>
                  <div className="space-y-1">
                    {skills.technical.map((skill, index) => (
                      <div key={`tech-${index}`} className="bg-white bg-opacity-20 rounded px-2 py-1 text-xs">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {skills.soft.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2 text-purple-200">Soft Skills</h3>
                  <div className="space-y-1">
                    {skills.soft.map((skill, index) => (
                      <div key={`soft-${index}`} className="bg-white bg-opacity-20 rounded px-2 py-1 text-xs">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Education Section */}
          {education.length > 0 && (
            <div>
              <h2 className="text-lg font-bold mb-4 border-b-2 border-white pb-2">
                🎓 EDUCATION
              </h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold text-sm">{edu.degree || 'Degree'}</h3>
                  <p className="text-purple-200 text-xs">{edu.fieldOfStudy}</p>
                  <p className="text-purple-200 text-xs">{edu.institution}</p>
                  <p className="text-xs">
                    {edu.startYear} - {edu.endYear}
                    {edu.cgpa && ` • CGPA: ${edu.cgpa}`}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Content */}
        <div className="w-2/3 p-6 text-gray-800">
          {/* Professional Summary */}
          {summary && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                <span className="w-6 h-6 mr-2">🚀</span>
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-gray-700 leading-relaxed bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                {summary}
              </p>
            </div>
          )}

          {/* Work Experience */}
          {workExperience.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                <span className="w-6 h-6 mr-2">💼</span>
                EXPERIENCE
              </h2>
              {workExperience.map((exp, index) => (
                <div key={index} className="mb-6 relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-indigo-500 rounded"></div>
                  <div className="ml-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-gray-900 text-base">{exp.jobTitle || 'Job Title'}</h3>
                        <p className="text-purple-600 font-semibold">{exp.company || 'Company Name'}</p>
                      </div>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                        {exp.startDate || 'Start'} - {exp.endDate || 'End'}
                      </span>
                    </div>
                    {exp.description && (
                      <ul className="list-none text-sm space-y-1">
                        {exp.description.split('\n').filter(line => line.trim()).map((line, i) => (
                          <li key={i} className="text-gray-700 flex items-start">
                            <span className="text-purple-500 mr-2">▸</span>
                            {line.trim()}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                <span className="w-6 h-6 mr-2">⚡</span>
                PROJECTS
              </h2>
              {projects.map((project, index) => (
                <div key={index} className="mb-6 bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900">{project.projectName || 'Project Name'}</h3>
                    {project.duration && (
                      <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-medium">
                        {project.duration}
                      </span>
                    )}
                  </div>
                  {project.technologies && (
                    <p className="text-purple-600 font-medium text-sm mb-2">
                      🛠️ {project.technologies}
                    </p>
                  )}
                  {project.projectUrl && (
                    <p className="text-indigo-600 text-sm mb-2 break-all">
                      🔗 {project.projectUrl}
                    </p>
                  )}
                  {project.description && (
                    <ul className="list-none text-sm space-y-1">
                      {project.description.split('\n').filter(line => line.trim()).map((line, i) => (
                        <li key={i} className="text-gray-700 flex items-start">
                          <span className="text-indigo-500 mr-2">▸</span>
                          {line.trim()}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default CreativeTemplate;