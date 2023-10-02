import React, { useState } from 'react';

const Tabs = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('your');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="tabs">
      <button onClick={() => handleTabChange('your')}>Your</button>
      <button onClick={() => handleTabChange('all')}>All</button>
      <button onClick={() => handleTabChange('blocked')}>Blocked</button>
    </div>
  );
};

export default Tabs;
