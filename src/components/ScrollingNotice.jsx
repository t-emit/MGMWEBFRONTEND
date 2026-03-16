import { useState, useEffect } from 'react';
import axios from 'axios';

const ScrollingNotice = () => {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // Fetching from the events endpoint, filtering for 'notice' type
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/events`);
                // Filter and get only the notices that we want to show
                const noticeItems = res.data.filter(item => item.type === 'notice' || item.type === 'important');
                
                if (noticeItems.length > 0) {
                     setNotices(noticeItems);
                } else {
                     // Fallback notice if none exist in the DB yet
                     setNotices([{ title: "Welcome to MGM's College of Engineering, Nanded. Classes for the new semester have commenced." }]);
                }
            } catch (error) {
                console.error("Error fetching notices:", error);
                // Fallback notice if API fails
                setNotices([{ title: "Welcome to MGM's College of Engineering, Nanded. Admissions are now open for the 2025-26 academic year." }]);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (loading) return null; // Don't show anything while loading

    // Combine all notice titles into one long string separated by a bullet or space
    const combinedNoticeText = notices.map(n => n.title).join(' • ');

    return (
        <div className="w-full bg-[#E2F0CB] border-y border-[#9BCA69] flex items-center overflow-hidden py-2 shadow-sm font-sans z-40 relative">
            <div className="bg-red-600 text-white font-bold px-4 py-1 ml-4 sm:ml-8 rounded-sm shadow-md flex-shrink-0 z-10 whitespace-nowrap">
                Notice :
            </div>
            
            <div className="flex-grow overflow-hidden relative ml-4">
                <style>{`
                    @keyframes slide-left {
                        from { transform: translateX(100%); }
                        to { transform: translateX(-100%); }
                    }
                    .animate-slide-left {
                        animation: slide-left 25s linear infinite;
                        white-space: nowrap;
                    }
                    .animate-slide-left:hover {
                        animation-play-state: paused;
                    }
                `}</style>
                <div className="animate-slide-left text-green-900 font-medium text-sm sm:text-base pr-full inline-block">
                    {combinedNoticeText}
                </div>
            </div>
        </div>
    );
};

export default ScrollingNotice;
