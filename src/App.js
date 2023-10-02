import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from './components/Navbar'

const mockApiData = {
  data: [
    {
      name: "Mixmax",
      budget_name: "Software subscription",
      owner_id: 1,
      spent: {
        value: 100,
        currency: "SGD",
      },
      available_to_spend: {
        value: 1000,
        currency: "SGD",
      },
      card_type: "burner",
      expiry: "9 feb",
      limit: 100,
      status: "active",
    },
    {
      name: "Quickbooks’",
      budget_name: "Software subscription",
      owner_id: 2,
      spent: {
        value: 100,
        currency: "SGD",
      },
      available_to_spend: {
        value: 1000,
        currency: "SGD",
      },
      card_type: "subscription",
      expiry: "3 jan",
      limit: 100,
      status: "active",
    },
    {
      name: "Linkedin’",
      budget_name: "Software subscription",
      owner_id: 3,
      spent: {
        value: 100,
        currency: "SGD",
      },
      available_to_spend: {
        value: 1000,
        currency: "SGD",
      },
      card_type: "subscription",
      expiry: "3 jan",
      limit: 100,
      status: "active",
    },
  ],
  page: 1,
  per_page: 10,
  total: 100,
};

function App() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [cardTypeFilter, setCardTypeFilter] = useState("all");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    // Simulate fetching data from an API
    // In a real application, replace this with an actual API call
    setTimeout(() => {
      setCards(mockApiData.data);
    }, 1000); // Simulate a delay
  }, []);

  // Filter cards based on search query and card type
  const filteredCards = cards.filter((card) => {
    return (
      card.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (cardTypeFilter === "all" || card.card_type === cardTypeFilter)
    );
  });

  return (
    
    <div className="App">
    
      <h1>Card Listing</h1>
      <Navbar />  
      <div className="filters ">
        <div className="search-icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>  🔍 
        </div>
        {isSearchOpen && ( // Display the search input when isSearchOpen is true
          <input
            type="text"
            placeholder="Search by Card Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        )}
        <select
          value={cardTypeFilter}
          onChange={(e) => setCardTypeFilter(e.target.value)}
        >
          <option value="all">All Card Types</option>
          <option value="burner">Burner</option>
          <option value="subscription">Subscription</option>
        </select>
      </div>
      <div className="card-list">
        {filteredCards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <div className="card-title">
                <h2>{card.name} </h2>
                <p>{card.budget_name}</p>
              </div>

              <div className="card-icon">
                {card.card_type === "burner" ? (
                  <div className="card-type-icon">🔥</div>
                ) : (
                  <div className="card-type-icon">🔄</div>
                )}
              </div>
            </div>
            <div className="card-details">
              <table>
                <thead>
                  <tr>
                    <th>Amount</th>
                    <th>Frequency</th>
                    <th>Expiry</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{`${card.spent.value} ${card.spent.currency}`}</td>
                    <td>
                      {card.card_type === "burner" ? "One-time" : "Monthly"}
                    </td>
                    <td>{card.expiry}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-status-bar">
              <div
                className="spent-bar"
                style={{ width: `${(card.spent.value / card.limit) * 100}%` }}
              >
                {/* <div className="indicator spent-indicator">Spent</div>
                <div className="indicator available-indicator">Available</div> */}
              </div>

              <div className="amount-indicators">

                <div className="red-indicator">
               
                  <span className="amount">Spent :   {`${card.spent.value} ${card.spent.currency}`}</span>
                </div>

                <div className="green-indicator">
                
                  <span className="amount">Available :   {`${card.available_to_spend.value} ${
                    card.spent.currency
                  }`}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
