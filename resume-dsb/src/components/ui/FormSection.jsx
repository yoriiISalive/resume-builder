import React from 'react';

const FormSection = ({ title, children, action }) => (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        {action}
      </div>
      {children}
    </div>
);

export default FormSection;