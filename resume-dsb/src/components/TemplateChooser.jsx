import React, { useState } from 'react';
import FormSection from './ui/FormSection';

const TemplateChooser = () => {
    const [selected, setSelected] = useState('Modern');
    const templates = ['Modern', 'Classic', 'Creative'];
    const descriptions = {
      Modern: 'Clean and professional',
      Classic: 'Traditional format',
      Creative: 'Stand out design',
    };
  
    return (
      <FormSection title="Choose Template">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templates.map(template => (
            <div
              key={template}
              onClick={() => setSelected(template)}
              className={`cursor-pointer rounded-lg p-4 transition-all ${selected === template ? 'border-2 border-blue-500 bg-blue-50' : 'border border-gray-300 hover:border-blue-400'}`}
            >
              <div className="bg-white border border-gray-200 h-40 w-full rounded-md mb-4 flex items-center justify-center">
                <span className="text-gray-500">{template} Template</span>
              </div>
              <h3 className={`text-gray-800 font-semibold ${selected === template && 'font-bold'}`}>{template}</h3>
              <p className="text-sm text-gray-500">{descriptions[template]}</p>
            </div>
          ))}
        </div>
      </FormSection>
    );
};

export default TemplateChooser;