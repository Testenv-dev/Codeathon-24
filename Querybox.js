import React, { useState } from 'react';
import axios from 'axios';

const QueryBox = ({ onFileSearch }) => {
    const [keyword, setKeyword] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const submitFileSearch = async (event) => {
        event.preventDefault();

        try {
            const serverResponse = await axios.post('http://127.0.0.1:5000/api/search', {
                search_text: keyword,
            });
            setSearchResults(serverResponse.data);  // Update the state with the response data
            onFileSearch(serverResponse.data, keyword);  // Pass results and search keyword to parent
        } catch (error) {
            console.error('Error while searching:', error);
        }
    };

    return (
        <form onSubmit={submitFileSearch}>
            <input 
                type="text" 
                value={keyword} 
                onChange={(e) => setKeyword(e.target.value)} 
                placeholder="Search..." 
            />
            <button type="submit">Search</button>
            {/* Render search results here */}
            <ul>
                {searchResults.map((fileItem, index) => (
                    <li key={index}>
                        {fileItem.name} - Found Occurrences: {fileItem.occurrences}
                    </li>
                ))}
            </ul>
        </form>
    );
};

export default QueryBox;
