// pages/DynamicDeptPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';

// This sub-navigation can also be made dynamic and fetched from the DB if needed
const cseDepartmentTabs = [
    // ... your existing tabs array
    { name: "DEPT Profile", path: "/academics/computer-science-engineering" },
    { name: "Achievements", path: "/academics/computer-science-engineering/achievements" },
    // ... etc
];

const DynamicDeptPage = () => {
  const location = useLocation();
  const { pageSlug } = useParams(); // We'll get the specific page from the URL
  const [pageContent, setPageContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Construct the full slug. Example: cse-achievements
  const fullSlug = `cse-${pageSlug || 'profile'}`; // Default to 'profile' for the main dept page

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      setError('');
      try {
        const { data } = await axios.get(`/api/pages/${fullSlug}`);
        setPageContent(data);
      } catch (err) {
        setError('Could not load page content. This page may not have been created yet.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, [fullSlug]);

  const createMarkup = (htmlContent) => {
    // Sanitize HTML to prevent XSS attacks
    return { __html: DOMPurify.sanitize(htmlContent) };
  };

  if (loading) return <div className="text-center mt-40">Loading page...</div>;
  if (error) return <div className="text-center mt-40 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      {/* Hero Section - Now Dynamic */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 text-white mb-6 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{pageContent?.title || 'Department Page'}</h1>
        <p className="text-xl opacity-90 max-w-2xl">{pageContent?.subtitle || 'Welcome to the department.'}</p>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md">
        {/* ... your existing tab navigation code ... */}
        {/* It correctly uses `location.pathname` to highlight the active tab */}
      </nav>

      {/* Main Content Area - Now Dynamic */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100">
        <div 
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={createMarkup(pageContent.content)}
        />
      </div>
    </div>
  );
};

export default DynamicDeptPage;