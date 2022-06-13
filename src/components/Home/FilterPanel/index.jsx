import React from 'react';
import FilterListToggle from '../../common/FilterListToggle';
import {categoryList} from '../../../constants';

const FilterPanel = () => {
  return (
    <div>
      {/* <h1>Filter Panel</h1> */}
      {/* Category */}
      <div className = 'input-group'>
        <p className="label">Category</p>
        <FilterListToggle options = {categoryList} value = {selectedCategory} selectToggle = {selectToggle} />
      </div>
      {/* Cuisines */}
      {/* Price Range */}
      {/* Star Rating */}
    </div>
  );
};

export default FilterPanel;
 