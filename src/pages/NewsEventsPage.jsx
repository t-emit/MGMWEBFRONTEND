import React from 'react';
import NewsEvents from '../components/NewsEvents';

const NewsEventsPage = () => {
    return (
        <div className="pt-28 pb-12 bg-gray-50 min-h-screen">
            <NewsEvents hideViewAll={true} />
        </div>
    );
};

export default NewsEventsPage;
