import React from 'react';

const Search = (props) => {
    return (
        <div className="searchBox">
            <input type="text" placeholder="Search Here!!!" value={props.input} onChange={props.onSearchHandler} />
            <button onClick={props.onSearchHandler}> Search </button>
            <button onClick={props.clearHandler}> Clear </button>
        </div>
    )

};

export default Search;