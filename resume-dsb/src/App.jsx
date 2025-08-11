import React from 'react';
import Header from './components/Header';
import AiResumeScore from './components/AiResumeScore';
import TemplateChooser from './components/TemplateChooser';
import PersonalInfo from './components/PersonalInfo';
import ProfessionalSummary from './components/ProfessionalSummary';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AiSuggestions from './components/AiSuggestions';
import LivePreview from './components/LivePreview';
import QuickActions from './components/QuickActions';
import { ResumeProvider } from './context/ResumeContext';
import './index.css'; // Importing global styles
import './App.css'; // Importing component-specific styles
export default function App() {
  return (
    <ResumeProvider>
      <div className="bg-gray-50 min-h-screen font-sans p-4 sm:p-6 lg:p-8">
        <div className="max-w-screen-2xl mx-auto">
          <Header />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left and Center Column */}
            <div className="lg:col-span-2 space-y-8">
              <AiResumeScore />
              <TemplateChooser />
              <PersonalInfo />
              <ProfessionalSummary />
              <WorkExperience />
              <Education />
              <Skills />
              <Projects />
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              <AiSuggestions />
              <LivePreview />
              <QuickActions />
            </div>
          </div>
        </div>
      </div>
    </ResumeProvider>
  );
}