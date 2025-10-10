import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsEvents = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                // THIS IS THE CORRECTED LINE
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/events`);
                setNewsItems(response.data);
            } catch (error) {
                console.error("Error fetching news and events:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchNews();
    }, []);

    if (loading) {
        return (
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h2 className="text-3xl font-bold text-blue-900">Loading News & Events...</h2>
                </div>
            </section>
        );
    }
    
    // Create duplicated lists for seamless scrolling animation
    const newsOnly = newsItems.filter(item => item.type === 'news');
    const duplicatedNews = [...newsOnly, ...newsOnly];

    const eventsOnly = newsItems.filter(item => item.type === 'event');
    const duplicatedEvents = [...eventsOnly, ...eventsOnly];
    
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-200/30 rounded-full blur-xl"></div>
            
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-indigo-800 bg-clip-text text-transparent mb-4">
                        News & Events
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Stay updated with the latest happenings and upcoming events at MGM College of Engineering
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* News Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9m0 0v3m0-3a2 2 0 012-2h2a2 2 0 012 2m-6 5v6m4-3H9" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-blue-900">Notice</h3>
                        </div>

                        <div className="relative h-96 overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100">
                            {newsOnly.length > 0 ? (
                                <>
                                    <div className="absolute inset-0 news-scroll-container">
                                        <div className="news-scroll-content animate-scrollUp">
                                            {duplicatedNews.map((item, index) => (
                                                <div key={`${item._id}-${index}`} className="group p-6 hover:bg-blue-50 transition-all duration-300 border-b border-gray-100 last:border-b-0">
                                                    <div className="flex items-start gap-4">
                                                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm text-center p-2">
                                                            {new Date(item.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                                                        </div>
                                                        <div className="flex-1">
                                                            <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold">News</span>
                                                            <h4 className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors mb-2 line-clamp-2">
                                                                {item.title}
                                                            </h4>
                                                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                                                {item.description}
                                                            </p>
                                                            <a href={item.link} className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors group/link">
                                                                Read Full Story
                                                                <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                                </>
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-500">No news to display.</div>
                            )}
                        </div>
                    </div>

                    {/* Events Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-amber-100 rounded-lg">
                                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-blue-900">Events</h3>
                        </div>
                        <div className="relative h-96 overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100">
                            {eventsOnly.length > 0 ? (
                                <>
                                    <div className="absolute inset-0 events-scroll-container">
                                        <div className="events-scroll-content animate-scrollUp">
                                            {duplicatedEvents.map((item, index) => (
                                                <div key={`${item._id}-${index}`} className="group p-6 hover:bg-amber-50 transition-all duration-300 border-b border-gray-100 last:border-b-0">
                                                    <div className="flex items-start gap-4">
                                                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm text-center p-2">
                                                            {new Date(item.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                                                        </div>
                                                        <div className="flex-1">
                                                            <span className="text-xs text-amber-600 uppercase tracking-wide font-semibold">Event</span>
                                                            <h4 className="font-bold text-gray-800 group-hover:text-amber-700 transition-colors mb-2 line-clamp-2">
                                                                {item.title}
                                                            </h4>
                                                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                                                {item.description}
                                                            </p>
                                                            <a href={item.link} className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-800 font-semibold text-sm transition-colors group/link">
                                                                View Details
                                                                <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                                </>
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-500">No events to display.</div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a href="/news-events" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                        View All News & Events
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NewsEvents;