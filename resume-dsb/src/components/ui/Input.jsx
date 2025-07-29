import React from 'react';

const Input = ({ label, id, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
    <input id={id} {...props} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
  </div>
);

export default Input;