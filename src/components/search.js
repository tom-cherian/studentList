import React from 'react';

const Search = (props) => {
    const { searchInput, onSearchHandler, clearHandler } = props
    return (
        <div className="searchBox">
            <input type="text" placeholder="Search Here!!!" value={ searchInput } onChange={ onSearchHandler } />
            <button onClick={ onSearchHandler }> Search </button>
            <button onClick={ clearHandler }> Clear </button>
        </div>
    )

};

export default Search;