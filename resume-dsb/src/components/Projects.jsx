import React, { useRef, useEffect } from 'react';
import FormSection from './ui/FormSection';
import Input from './ui/Input';
import Icon from './ui/Icon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useResume } from '../context/ResumeContext';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const rootRef = useRef(null);
  const { projects, setProjects } = useResume();

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

  const handleAddProject = () => {
    setProjects([
      ...projects,
      {
        projectName: '',
        technologies: '',
        projectUrl: '',
        duration: '',
        description: '',
      },
    ]);
  };

  const handleRemoveProject = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newProjects = [...projects];
    newProjects[index][name] = value;
    setProjects(newProjects);
  };

  return (
    <div ref={rootRef}>
      <FormSection
        title="Projects"
        action={
          <button
            onClick={handleAddProject}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 cursor-pointer"
          >
            + Add Project
          </button>
        }
      >
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="space-y-6 p-4 border border-gray-200 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Project Name"
                  name="projectName"
                  type="text"
                  value={project.projectName}
                  onChange={(e) => handleChange(index, e)}
                />
                <Input
                  label="Technologies Used"
                  name="technologies"
                  type="text"
                  value={project.technologies}
                  onChange={(e) => handleChange(index, e)}
                />
                <Input
                  label="Project URL"
                  name="projectUrl"
                  type="url"
                  value={project.projectUrl}
                  onChange={(e) => handleChange(index, e)}
                />
                <Input
                  label="Duration"
                  name="duration"
                  type="text"
                  value={project.duration}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
                <textarea
                  name="description"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 h-24"
                  value={project.description}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div className="flex justify-between items-center text-sm">
                <button className="text-orange-600 font-semibold flex items-center gap-1 cursor-pointer">
                  <Icon path="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a14.994 14.994 0 01-7.5 0C5.093 19.386 3.75 17.25 3.75 15c0-3.75 3.75-7.5 7.5-7.5s7.5 3.75 7.5 7.5c0 2.25-1.343 4.386-3.25 5.789z" className="w-5 h-5" />
                  Enhance Description
                </button>
                <button
                  onClick={() => handleRemoveProject(index)}
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

export default Projects;
