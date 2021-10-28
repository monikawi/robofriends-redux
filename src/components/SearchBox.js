import React from 'react';

const SearchBox = ({ onChange }) => {
  return (
    <div className="pa2">
      <input onChange={onChange} className="pa1 ba b--green bg-lightest-blue" type="search" placeholder="Search bots"/>
    </div>
  );
}
 
export default SearchBox;