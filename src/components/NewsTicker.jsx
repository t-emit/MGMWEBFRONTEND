// src/components/NewsTicker.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsTicker = () => {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    const fetchTickerNews = async () => {
      try {
        // Fetch all events/news and take the 5 most recent news items for the ticker
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/events`);
        const newsOnly = response.data
          .filter(item => item.type === 'news')
          .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by most recent
          .slice(0, 5); // Get top 5
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

  // Duplicate the news list for a seamless loop
  const tickerItems = [...latestNews, ...latestNews];

  return (
    <div className="bg-red-700 text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center">
        <span className="flex-shrink-0 font-bold bg-yellow-500 text-blue-900 px-3 py-1 text-sm rounded mr-4">
          LATEST NEWS
        </span>
        <div className="relative flex-1 h-6 overflow-hidden">
          <div className="absolute animate-marquee whitespace-nowrap">
            {tickerItems.map((item, index) => (
              <a href={item.link || '#'} key={`${item._id}-${index}`} className="mx-4 hover:underline text-sm">
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;