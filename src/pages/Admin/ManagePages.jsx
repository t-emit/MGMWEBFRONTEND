// pages/Admin/ManagePages.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Make sure to install axios

const ManagePages = () => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPages = async () => {
      try {
        // You'll need to send an auth token in the headers
        const token = localStorage.getItem('adminToken'); // Or however you store your token
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios.get('/api/pages', config);
        setPages(data);
      } catch (err) {
        setError('Failed to fetch pages.');
      } finally {
        setLoading(false);
      }
    };
    fetchPages();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Manage Website Pages</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Page Title</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">URL Slug</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page) => (
              <tr key={page.slug}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{page.title}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">/{page.slug}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <Link
                    to={`/admin/edit-page/${page.slug}`}
                    className="text-indigo-600 hover:text-indigo-900 font-semibold"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePages;