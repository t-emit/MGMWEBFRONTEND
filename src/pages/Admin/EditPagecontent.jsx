// pages/Admin/EditPageContent.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles

const EditPageContent = () => {
  const { slug } = useParams();
  const [pageData, setPageData] = useState({ title: '', subtitle: '', content: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const token = localStorage.getItem('adminToken'); // Your auth token

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const { data } = await axios.get(`/api/pages/${slug}`, config);
        setPageData(data);
      } catch (err) {
        setMessage('Error: Failed to load page content.');
      } finally {
        setLoading(false);
      }
    };
    fetchPage();
  }, [slug, token]);

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    try {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.put(`/api/pages/${slug}`, pageData, config);
      setMessage('Content saved successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      setMessage('Error: Failed to save content.');
    } finally {
      setSaving(false);
    }
  };

  // Custom image handler for ReactQuill
  const imageHandler = (quillInstance) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('file', file);

      // Show a loading indicator if you can
      const range = quillInstance.getEditor().getSelection(true);

      try {
        const config = { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' } };
        const res = await axios.post('/api/pages/upload', formData, config);
        
        // Insert the image URL into the editor
        quillInstance.getEditor().insertEmbed(range.index, 'image', res.data.url);
      } catch (error) {
        console.error('Image upload failed:', error);
        setMessage('Image upload failed.');
      }
    };
  };

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'], // Added 'image'
        ['clean']
      ],
      handlers: {
        image: () => imageHandler(quillRef.current)
      }
    },
  }), []);

  const quillRef = React.useRef();

  if (loading) return <div>Loading editor...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Editing: {pageData.title}</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Page Title</label>
          <input
            type="text"
            value={pageData.title}
            onChange={(e) => setPageData({ ...pageData, title: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Page Subtitle / Intro</label>
          <textarea
            value={pageData.subtitle}
            onChange={(e) => setPageData({ ...pageData, subtitle: e.target.value })}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Main Content</label>
          <ReactQuill
            ref={quillRef}
            theme="snow"
            value={pageData.content}
            onChange={(content) => setPageData({ ...pageData, content })}
            modules={modules}
            className="bg-white"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:bg-gray-400"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
          {message && <p className="text-sm text-gray-600">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default EditPageContent;