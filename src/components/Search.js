import React,{useContext} from "react";
import MainContext from "../MainContext";
import { AiOutlineSearch } from "react-icons/ai";

function Search() {
  const { search, setSearch } = useContext(MainContext);

  return (
    <div className='search'>
      <div className='toolbar'>
        <label htmlFor='icon'>
          <AiOutlineSearch className='search-icon' />
        </label>
        <input
          id='icon'
          type='text'
          placeholder='Search'
          className='search-input'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default React.memo(Search);
