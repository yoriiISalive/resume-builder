import React from 'react';
import FormSection from './ui/FormSection';
import Input from './ui/Input';

const Education = () => (
    <FormSection 
        title="Education"
        action={<button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600">+ Add Education</button>}
    >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Degree" id="degree" type="text" defaultValue="Bachelor of Technology" />
            <Input label="Field of Study" id="fieldOfStudy" type="text" defaultValue="Computer Science" />
            <Input label="Institution" id="institution" type="text" defaultValue="University of Technology" />
            <Input label="CGPA/Percentage" id="cgpa" type="text" defaultValue="8.7/10" />
            <Input label="Start Year" id="startYear" type="text" defaultValue="2017" />
            <Input label="End Year" id="endYear" type="text" defaultValue="2021" />
        </div>
    </FormSection>
);

export default Education;