import React from "react";
import SearchIcon from '@material-ui/icons/Search'
import './styles.css'

const SearchBar = ({value, changeInput}) => {
  return (
    <div className = "SearchBar-wrap">
      {/* <SearchIcon className = 'SearchBar-icon' /> */}
      {/* <h1>Search Bar</h1> */}
      <input
        type = 'text'
        placeholder = 'Search Here'
        value = {value}
        onChange = {changeInput}
      />
    </div>
  );
};

export default SearchBar;