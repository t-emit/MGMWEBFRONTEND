import React, { useState, useEffect } from 'react'; // Step 1: Import useState and useEffect
import axios from 'axios'; // Step 2: Import axios

const NewsEvents = () => {
    // Step 3: Set up state to hold the news items from the backend
    // It starts as an empty array.
    const [newsItems, setNewsItems] = useState([]);
    // Optional: Add a loading state for better user experience
    const [loading, setLoading] = useState(true);

    // Step 4: Use useEffect to fetch data when the component first loads
    useEffect(() => {
        const fetchNews = async () => {
            try {
                // This URL must match your backend server's address and endpoint
                const response = await axios.get('http://localhost:5000/api/events');
                
                // Update our state with the data from the API
                setNewsItems(response.data); 
            } catch (error) {
                console.error("Error fetching news and events:", error);
                // In case of an error, you might want to show a message to the user
            } finally {
                // This runs whether the fetch was successful or not
                setLoading(false);
            }
        };

        fetchNews(); // Call the function to run it
    }, []); // The empty array [] means this runs only ONCE, when the component is mounted.

    // Step 5: Add a loading indicator
    if (loading) {
        return (
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h2 className="text-3xl font-bold text-blue-900">Loading News...</h2>
                </div>
            </section>
        );
    }
    
    // Step 6: Your original JSX is almost unchanged!
    // It now maps over the 'newsItems' state variable, which is filled from your backend.
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 relative">
                    News & Events
                    <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-500 rounded"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {newsItems.map((item) => (
                        // IMPORTANT: Use item._id from MongoDB for the key, not item.id
                        <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
                            <div className="h-48 overflow-hidden">
                                <img
                                    // IMPORTANT: Use imageUrl from your database schema
                                    src={item.imageUrl} 
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <span className="text-gray-500 text-sm">{item.date}</span>
                                <h3 className="text-xl font-bold text-blue-900 my-2">{item.title}</h3>
                                {/* IMPORTANT: Use description from your database schema, not 'excerpt' */}
                                <p className="text-gray-600 mb-4">{item.description}</p>
                                <a href={item.link} className="text-red-600 font-semibold flex items-center gap-2 group">
                                    Read More <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsEvents;