import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ handleSearch, isDisabled }) => (
  <div className='search'>
    <input type='search' placeholder='Search by Github username' onKeyUp={handleSearch} disabled={isDisabled} />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
