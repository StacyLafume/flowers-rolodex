import React from 'react'
import './search-bar.styles.css'

export const SearchBar = ({ placeholder, handleChangeInput }) => {
    return (
        <div className="holder" >
          <input 
          className="search"
          type='search' 
          placeholder={placeholder} 
          onChange={ handleChangeInput }
        />  
        </div>
    )
}
