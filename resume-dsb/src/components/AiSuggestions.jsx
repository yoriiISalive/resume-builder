import React from 'react';

const AiSuggestions = () => {
    const suggestions = [
        { title: 'Add Quantified Achievements', desc: 'Include specific numbers and metrics in your experience section', color: 'bg-blue-100' },
        { title: 'Optimize Keywords', desc: 'Add industry-relevant keywords for better ATS compatibility', color: 'bg-green-100' },
        { title: 'Improve Action Verbs', desc: 'Use stronger action verbs to make your experience more impactful', color: 'bg-yellow-100' },
        { title: 'Add Certifications', desc: 'Consider adding relevant certifications to strengthen your profile', color: 'bg-purple-100' },
    ];

    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">AI Suggestions</h2>
            <div className="space-y-4">
                {suggestions.map((sug, i) => (
                    <div key={i} className={`p-4 rounded-lg ${sug.color}`}>
                        <div className="flex justify-between items-start">
                            <h3 className="font-semibold text-gray-800">{sug.title}</h3>
                            <button className="text-sm text-blue-600 font-semibold">Apply</button>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{sug.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AiSuggestions;