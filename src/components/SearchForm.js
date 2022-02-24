import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (keyword) {
          navigate(`/search/shows/${keyword}`);
        }
      }}
    >
      <input
        type="text"
        className="search-form__input"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit" className="search-form__button button-primary">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
