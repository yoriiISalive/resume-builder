import React, { useRef, useEffect } from 'react';
import Icon from './ui/Icon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const QuickActions = () => {
    const actions = [
        { name: 'Save Resume', icon: 'M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3', color: 'bg-blue-100' },
        { name: 'Share Resume', icon: 'M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 100-2.186m0 2.186c-.18.324-.283.696-.283 1.093s.103.77.283 1.093m-9.566-7.5a2.25 2.25 0 100-2.186m0 2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093', color: 'bg-green-100' },
        { name: 'Duplicate Resume', icon: 'M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.375a48.667 48.667 0 00-7.5 0C8.188 17.625 7.5 16.338 7.5 15c0-1.338.688-2.625 1.875-3.375a48.667 48.667 0 017.5 0c1.188.75 1.875 2.037 1.875 3.375 0 1.338-.688 2.625-1.875 3.375z', color: 'bg-purple-100' },
        { name: 'AI Optimizer', icon: 'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a14.994 14.994 0 01-7.5 0C5.093 19.386 3.75 17.25 3.75 15c0-3.75 3.75-7.5 7.5-7.5s7.5 3.75 7.5 7.5c0 2.25-1.343 4.386-3.25 5.789z', color: 'bg-orange-100' },
    ];
    const rootRef = useRef(null);

    useEffect(() => {
        if (rootRef.current) {
            gsap.fromTo(
                rootRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: rootRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }
    }, []);

    return (
        <div ref={rootRef} className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="space-y-3">
                {actions.map(action => (
                    <button key={action.name} className={`w-full flex items-center gap-3 p-3 rounded-lg text-left cursor-pointer ${action.color} hover:opacity-80 transition-opacity`}>
                        <Icon path={action.icon} className="w-5 h-5 text-gray-700" />
                        <span className="font-semibold text-gray-700">{action.name}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default QuickActions;
