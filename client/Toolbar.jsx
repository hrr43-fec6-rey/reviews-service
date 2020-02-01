import React, { useState, useEffect } from 'react';

const Toolbar = ({ sort, sortReviews }) => {
  const [rating, setRating] = useState('');
  const [filters, setFilters] = useState([]);

  const handleSelection = (e) => {
    setRating(e.target.value);
    sortReviews(e.target.value, filters);
  };

  const handleCheck = (e) => {
    const tempArray = filters.slice();
    if (e.target.checked) {
      tempArray.push(e.target.value);
    } else {
      const i = filters.indexOf(e.target.value);
      tempArray.splice(i, 1);
    }
    setFilters(tempArray);
    sortReviews(rating, tempArray);
  };

  return (
    <div>
      <div className="dropdown">
        <div className="dropbtn" role="button">Sort by</div>
        <div className="dropdown-content">
          <div className="drop">
            <span className="select-drop">
              <input type="radio" value="Newest" checked={rating === 'Newest'} onChange={(e) => handleSelection(e)} />
              <span className="tool-txt">Newest</span>
            </span>
            <span className="select-drop">
              <input type="radio" value="Highest" checked={rating === 'Highest'} onChange={(e) => handleSelection(e)} />
              <span className="tool-txt">Highest rating</span>
            </span>
            <span className="select-drop">
              <input type="radio" value="Lowest" checked={rating === 'Lowest'} onChange={(e) => handleSelection(e)} />
              <span className="tool-txt">Lowest rating</span>
            </span>

          </div>
        </div>
      </div>

      <div className="filter-header">Filters</div>
      <div className="boxes">
        <div className="filter-name">
          <input type="checkbox" id="checkbox-1" className="regular-checkbox"  value="Good for groups" onChange={(e) => handleCheck(e)} />
          <label htmlFor="checkbox-1"></label>
          <span className="tag" htmlFor="checkbox-1"> Good for groups</span>
        </div>
        <div className="filter-name">
          <input type="checkbox" id="checkbox-2" className="regular-checkbox"  value="Appetizers" onChange={(e) => handleCheck(e)} />
          <label htmlFor="checkbox-2" />
          <span className="tag"> Appetizers</span>
        </div>
        <div className="filter-name">
          <input type="checkbox" id="checkbox-3" className="regular-checkbox"  value="Drinks" onChange={(e) => handleCheck(e)} />
          <label htmlFor="checkbox-3" />
          <span className="tag"> Drinks</span>
        </div>
      </div>
      <div className="boxes">
        <div className="filter-name">
          <input type="checkbox" id="checkbox-4" className="regular-checkbox"  value="Desserts" onChange={(e) => handleCheck(e)} />
          <label htmlFor="checkbox-4" />
          <span className="tag"> Desserts</span>
        </div>
        <div className="filter-name">
          <input type="checkbox" id="checkbox-5" className="regular-checkbox"  value="Kid friendly" onChange={(e) => handleCheck(e)} />
          <label htmlFor="checkbox-5" />
          <span className="tag"> Kid friendly</span>
        </div>
      </div>
    </div>
  );
};


export default Toolbar;
