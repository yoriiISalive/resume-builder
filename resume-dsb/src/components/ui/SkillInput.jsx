import React from 'react';

const SkillInput = ({ title, skills, setSkills, color }) => {
  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const addSkill = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      setSkills([...skills, e.target.value]);
      e.target.value = '';
    }
  };

  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${color.bg} ${color.text}`}
          >
            {skill}
            <button onClick={() => removeSkill(skill)} className="font-bold">
              ×
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        onKeyDown={addSkill}
        placeholder="Add a skill and press Enter"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default SkillInput;