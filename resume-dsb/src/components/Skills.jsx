import React from 'react';
import FormSection from './ui/FormSection';
import SkillInput from './ui/SkillInput';
import Icon from './ui/Icon';

const Skills = () => (
    <FormSection 
        title="Skills"
        action={
            <button className="text-sm text-yellow-600 font-semibold flex items-center gap-1">
                <Icon path="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" className="w-5 h-5" />
                Suggest Skills
            </button>
        }
    >
        <div className="space-y-6">
            <SkillInput 
                title="Technical Skills" 
                skills={['JavaScript', 'React', 'Node.js', 'Python']} 
                color={{ bg: 'bg-blue-100', text: 'text-blue-800' }} 
            />
            <SkillInput 
                title="Soft Skills" 
                skills={['Leadership', 'Communication', 'Problem Solving']} 
                color={{ bg: 'bg-green-100', text: 'text-green-800' }} 
            />
        </div>
    </FormSection>
);

export default Skills;
