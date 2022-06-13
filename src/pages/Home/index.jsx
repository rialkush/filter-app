import React, {useState} from "react";
import SearchBar from "../../components/Home/SearchBar";
import FilterPanel from "../../components/Home/FilterPanel";
import List from "../../components/Home/List";
import './styles.css'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  return (
    <div className = "home">
      {/* Search Bar */}
      <SearchBar />
      <div className = "home_panelList-wrap">
        <div className = "home_panel-wrap">
          {/* Side Panels */}
          <FilterPanel 
            selectToggle = {handleSelectCategory}
            selectedCategory =  {selectedCategory}
          />
        </div>
        <div className = "home_list-wrap">
          {/* List & Empty View */}
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;