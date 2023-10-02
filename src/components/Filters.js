import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cardType, setCardType] = useState('');

  const handleFilterChange = () => {
    onFilterChange(searchQuery, cardType);
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by card name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select
        value={cardType}
        onChange={(e) => setCardType(e.target.value)}
      >
        <option value="">All Card Types</option>
        <option value="burner">Burner</option>
        <option value="subscription">Subscription</option>
      </select>
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default Filters;
