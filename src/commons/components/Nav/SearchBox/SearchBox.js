import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchBox.scss';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleInputChange = (event) => {
    setQuery(event.target.value.trim()); // trim to remove leading and trailing whitespace
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate query before redirecting
    if (query) {
      history.push(`/items?search=${encodeURIComponent(query)}`);
    } else {
      // Feedback message
      console.warn('The query is empty');
    }
  };

  return (
    <div className="search-bar-container">
      <form className="search-box-form" role="search" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-box-form__input"
          aria-label="Ingresa lo que quieras encontrar"
          placeholder="Nunca dejes de buscar"
          maxLength="120"
          tabIndex="2"
          onChange={handleInputChange}
        />
        <button type="submit" className="search-box-form__button" tabIndex="3" />
      </form>
    </div>
  );
};

export default SearchBox;
