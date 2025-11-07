// src/components/NewsTicker.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsTicker = () => {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    const fetchTickerNews = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/events`);
        
        const newsOnly = response.data
          .filter(item => item.type === 'news')
          .sort((a, b) => {
            const dateComparison = new Date(b.date) - new Date(a.date);
            if (dateComparison !== 0) return dateComparison;
            return new Date(b.createdAt) - new Date(a.createdAt);
          })
          .slice(0, 1); // Get ONLY the top 1 most recent news item
          
        setLatestNews(newsOnly);
      } catch (error) {
        console.error("Error fetching news for ticker:", error);
      }
    };
    fetchTickerNews();
  }, []);

  if (latestNews.length === 0) {
    return null; // Don't render anything if there's no news
  }

  // We still duplicate the item for a seamless animation loop
  const tickerItems = [...latestNews, ...latestNews];
  const latestItem = latestNews[0]; // Get the single latest item for its date

  return (
    <div className="bg-red-700 text-white py-2 overflow-hidden shadow-inner">
      <div className="container mx-auto px-4 flex items-center">
        <span className="flex-shrink-0 font-bold bg-white text-red-700 px-3 py-1 text-sm rounded mr-4">
          LATEST NEWS
        </span>

        {/* This wrapper is now the "viewport" for both scrolling and static elements */}
        <div className="relative flex-1 h-6 overflow-hidden">
          
          {/* 1. The Scrolling Titles */}
          <div className="absolute top-0 left-0 h-full animate-marquee whitespace-nowrap flex items-center">
            {tickerItems.map((item, index) => (
              // The link now only contains the title
              // Increased right margin (mr-24) to ensure it scrolls fully under the date
              <a href={item.link || '#'} key={`${item._id}-${index}`} className="mx-4 mr-24 hover:underline text-sm group">
                <span className="group-hover:text-yellow-300 transition-colors">{item.title}</span>
              </a>
            ))}
          </div>

          {/* 2. The Static Date with a Fade Effect */}
          <div className="absolute top-0 right-0 h-full flex items-center z-10 
                       bg-gradient-to-l from-red-700 via-red-700/90 to-transparent pl-8 pr-4">
            <span className="text-xs text-white bg-red-500/50 border border-red-400/50 px-2 py-0.5 rounded-full whitespace-nowrap">
              {new Date(latestItem.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;