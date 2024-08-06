// src/components/Search.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/recommend', { movieName: query });
            onSearch(response.data);
        } catch (error) {
            console.error('Error fetching recommendation', error);
        }
    };

    return (
        <section className="search-section">
            <h1>Find Your Next Favorite Movie</h1>
            <input
                type="text"
                placeholder="Enter movie name..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </section>
    );
};

export default Search;
