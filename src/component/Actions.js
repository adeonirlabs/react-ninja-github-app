import React from 'react'
import PropTypes from 'prop-types'

const Actions = ({ handleRepos, handleStarred }) => (
  <div className='actions'>
    <button onClick={handleRepos}>Show repositories</button>
    <button onClick={handleStarred}>Show stars</button>
  </div>
)

Actions.propTypes = {
  handleRepos: PropTypes.func.isRequired,
  handleStarred: PropTypes.func.isRequired
}

export default Actions
