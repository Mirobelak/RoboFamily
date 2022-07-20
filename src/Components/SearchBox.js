import React from 'react';

const SearchBox = ({searchfield, searchchange}) => {
    return (
        <div className='p-2'>
            <input className='d-inline bg-light rounded text-center text-black' type="search" placeholder='search for your robot'
            onChange={searchchange}/>
        </div>
    );
}

export default SearchBox;
