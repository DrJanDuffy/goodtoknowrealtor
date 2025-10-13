'use client';

import { useState } from 'react';

export default function HeroSearch() {
  const [activeTab, setActiveTab] = useState('homes');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: ''
  });

  const tabs = [
    { id: 'homes', label: 'HOMES' },
    { id: 'agents', label: 'AGENTS' },
    { id: 'offices', label: 'OFFICES' },
    { id: 'rentals', label: 'RENTALS' }
  ];

  const priceRanges = [
    '$0', '$50K', '$100K', '$150K', '$200K', '$250K', '$300K', '$400K', 
    '$500K', '$750K', '$1M', '$1.5M', '$2M', '$3M', '$5M', '$10M+'
  ];

  return (
    <div className="hero-search">
      <div className="hero-search__content">
        <div className="mobile-header">
          <img 
            className="logo" 
            src="/images/bhhs/logo.svg" 
            alt="BHHS logo" 
          />
          <button className="btn--close" aria-label="Close button">
            <svg>
              <use href="#close-x"></use>
            </svg>
          </button>
        </div>
        
        <section className="tabs">
          <ul className="tabs-list">
            {tabs.map((tab) => (
              <li 
                key={tab.id}
                className={`tabs-list__tab tabs-list__tab--${tab.id} ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </li>
            ))}
          </ul>

          {/* Homes Search */}
          <div className={`tabs-pane tabs-pane--homes ${activeTab === 'homes' ? 'active' : ''}`}>
            <form method="get" className="form--homes" action="/search">
              <div className="search-bar-wrapper">
                <div className="cmp-suggester">
                  <input
                    type="text"
                    placeholder="Enter city, neighborhood, address, or ZIP"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                </div>
                <button className="btn--close" type="button" aria-label="Close Button">
                  <svg>
                    <use href="#close-x"></use>
                  </svg>
                </button>
                <button className="btn--filter" type="button" aria-label="Homes Search filter">
                  <svg>
                    <use href="#filter"></use>
                  </svg>
                </button>
                <button className="btn--search" type="submit" aria-label="Homes Search button">
                  <span>SEARCH</span>
                </button>
              </div>
              
              <div className="filters homes" id="filter-homes">
                <select 
                  name="MinPrice"
                  value={filters.minPrice}
                  onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
                >
                  <option value="">$ minimum price</option>
                  {priceRanges.map(price => (
                    <option key={price} value={price}>{price}</option>
                  ))}
                </select>
                
                <select 
                  name="MaxPrice"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
                >
                  <option value="">$ maximum price</option>
                  {priceRanges.map(price => (
                    <option key={price} value={price}>{price}</option>
                  ))}
                </select>
                
                <select 
                  name="MinBedroomsTotal"
                  value={filters.bedrooms}
                  onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
                >
                  <option value="">bedrooms</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}+</option>
                  ))}
                </select>
                
                <select 
                  name="MinBathroomsTotal"
                  value={filters.bathrooms}
                  onChange={(e) => setFilters({...filters, bathrooms: e.target.value})}
                >
                  <option value="">bathrooms</option>
                  {[...Array(8)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}+</option>
                  ))}
                </select>
              </div>
              
              <button className="btn btn-primary btn--submit-mobile" type="submit">
                SEARCH
              </button>
            </form>
          </div>

          {/* Agents Search */}
          <div className={`tabs-pane tabs-pane--agents ${activeTab === 'agents' ? 'active' : ''}`}>
            <form method="get" className="form--agents" action="/agent-search-results">
              <div className="search-bar-wrapper">
                <div className="cmp-agent-search-suggester">
                  <input
                    type="text"
                    placeholder="Enter agent name or location"
                    className="search-input"
                  />
                </div>
                <button className="btn--search" type="submit">
                  <span>SEARCH</span>
                </button>
              </div>
            </form>
          </div>

          {/* Offices Search */}
          <div className={`tabs-pane tabs-pane-offices ${activeTab === 'offices' ? 'active' : ''}`}>
            <form method="get" className="form--offices" action="/office-results-list">
              <div className="search-bar-wrapper">
                <div className="cmp-office-search-suggester">
                  <input
                    type="text"
                    placeholder="Enter office name or location"
                    className="search-input"
                  />
                </div>
                <button className="btn--search offices" type="submit">
                  <span>SEARCH</span>
                </button>
              </div>
            </form>
          </div>

          {/* Rentals Search */}
          <div className={`tabs-pane tabs-pane--rentals ${activeTab === 'rentals' ? 'active' : ''}`}>
            <form method="get" className="form--rentals" action="/search">
              <div className="search-bar-wrapper">
                <div className="cmp-suggester">
                  <input
                    type="text"
                    placeholder="Enter city, neighborhood, address, or ZIP"
                    className="search-input"
                  />
                </div>
                <button className="btn--close" type="button" aria-label="Close Button">
                  <svg>
                    <use href="#close-x"></use>
                  </svg>
                </button>
                <button className="btn--filter" type="button" aria-label="Rentals Search filter">
                  <svg>
                    <use href="#filter"></use>
                  </svg>
                </button>
                <button className="btn--search" type="submit" aria-label="Rentals Search button">
                  <span>SEARCH</span>
                </button>
              </div>
              
              <div className="filters homes" id="filter-rentals">
                <select name="MinPrice">
                  <option value="">$ minimum price</option>
                  {priceRanges.map(price => (
                    <option key={price} value={price}>{price}</option>
                  ))}
                </select>
                
                <select name="MaxPrice">
                  <option value="">$ maximum price</option>
                  {priceRanges.map(price => (
                    <option key={price} value={price}>{price}</option>
                  ))}
                </select>
                
                <select name="MinBedroomsTotal">
                  <option value="">bedrooms</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}+</option>
                  ))}
                </select>
                
                <select name="MinBathroomsTotal">
                  <option value="">bathrooms</option>
                  {[...Array(8)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}+</option>
                  ))}
                </select>
              </div>
              
              <button className="btn btn-primary btn--submit-mobile" type="submit">
                SEARCH
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
