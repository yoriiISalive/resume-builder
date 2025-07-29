import React from 'react';
import FormSection from './ui/FormSection';
import Input from './ui/Input';
import Icon from './ui/Icon';

const PersonalInfo = () => (
  <FormSection 
    title="Personal Information"
    action={
      <button className="text-sm text-blue-600 font-semibold flex items-center gap-1">
        <Icon path="M9.813 15.904L9 15l.813-.904L12 12l2.187 2.096L15 15l-.813.904L12 18l-2.187-2.096zM12 21a9 9 0 100-18 9 9 0 000 18zm0-2a7 7 0 110-14 7 7 0 010 14z" className="w-5 h-5" />
        AI Suggestions
      </button>
    }
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Input label="Full Name" id="fullName" type="text" defaultValue="John Doe" />
      <Input label="Email" id="email" type="email" defaultValue="john.doe@email.com" />
      <Input label="Phone" id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
      <Input label="Location" id="location" type="text" defaultValue="San Francisco, CA" />
      <div className="md:col-span-2">
        <Input label="LinkedIn Profile" id="linkedin" type="url" defaultValue="https://linkedin.com/in/johndoe" />
      </div>
    </div>
  </FormSection>
);

export default PersonalInfo;