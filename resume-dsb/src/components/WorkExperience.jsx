import React from 'react';
import FormSection from './ui/FormSection';
import Input from './ui/Input';
import Icon from './ui/Icon';

const WorkExperience = () => (
    <FormSection 
        title="Work Experience"
        action={<button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600">+ Add Experience</button>}
    >
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Job Title" id="jobTitle" type="text" defaultValue="Senior Software Engineer" />
                <Input label="Company" id="company" type="text" defaultValue="TechCorp Solutions" />
                <Input label="Start Date" id="startDate" type="text" defaultValue="June 2021" />
                <Input label="End Date" id="endDate" type="text" defaultValue="March 2024" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
                <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 h-28"
                    defaultValue={`• Led development of microservices architecture serving 1M+ users
• Improved application performance by 40% through code optimization
• Mentored 3 junior developers and conducted technical interviews`}
                />
            </div>
            <div className="flex justify-between items-center text-sm">
                <button className="text-orange-600 font-semibold flex items-center gap-1">
                    <Icon path="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a14.994 14.994 0 01-7.5 0C5.093 19.386 3.75 17.25 3.75 15c0-3.75 3.75-7.5 7.5-7.5s7.5 3.75 7.5 7.5c0 2.25-1.343 4.386-3.25 5.789z" className="w-5 h-5" />
                    Optimize with AI
                </button>
                <button className="text-red-500 font-semibold flex items-center gap-1">
                    <Icon path="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" className="w-4 h-4" />
                    Remove
                </button>
            </div>
        </div>
    </FormSection>
);

export default WorkExperience;