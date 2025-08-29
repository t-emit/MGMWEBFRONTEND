// src/pages/SearchResultsPage.jsx

import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q'); // Gets the search term from the URL (e.g., ?q=alumni)
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    // Fetch the search data from the public folder
    fetch('/search-data.json')
      .then(response => response.json())
      .then(data => {
        const lowerCaseQuery = query.toLowerCase();
        // Filter the data based on the query
        const filteredResults = data.filter(item => 
          item.title.toLowerCase().includes(lowerCaseQuery) || 
          item.content.toLowerCase().includes(lowerCaseQuery)
        );
        setResults(filteredResults);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to load search data:", error);
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-indigo-800">Search Results</h1>
          {query && <p className="text-lg text-gray-600 mt-2">Showing results for: <span className="font-semibold text-gray-800">"{query}"</span></p>}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          {loading && <p>Loading...</p>}
          
          {!loading && results.length > 0 && (
            <ul className="space-y-6">
              {results.map(item => (
                <li key={item.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                  <Link to={item.path} className="group">
                    <h2 className="text-xl font-bold text-indigo-700 group-hover:underline">{item.title}</h2>
                  </Link>
                  <p className="text-gray-600 mt-2">{item.content.substring(0, 150)}...</p>
                  <Link to={item.path} className="inline-flex items-center text-green-600 font-semibold mt-3 hover:text-green-800">
                    Read more <FaChevronRight className="ml-1 text-sm" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
          
          {!loading && results.length === 0 && (
            <div className="text-center py-10">
                <h2 className="text-xl font-semibold text-gray-700">No results found for "{query}".</h2>
                <p className="text-gray-500 mt-2">Please try a different search term.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;