function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control custom-input"
        placeholder="Search by client name or service..."
        value={searchQuery}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  )
}

export default SearchBar
