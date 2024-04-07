import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="SearchBar">
      <input
        className="SearchBar-input"
        type="search"
        placeholder="링크를 검색해 보세요."
      />
      <img src="images/search.svg" className="SearchBar-icon" />
    </div>
  );
}

export default SearchBar;
