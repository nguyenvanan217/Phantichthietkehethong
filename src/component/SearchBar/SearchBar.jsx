import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    type="text"
                    placeholder="Tìm kiếm tour du lịch..."
                    value={searchTerm}
                    onChange={handleChange}
                    className="search-input"
                />
                <button type="button" className="search-button">
                    <FaSearch />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
