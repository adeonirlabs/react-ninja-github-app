import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = ({ userinfo }) => (
  <div className='user-info'>
    <img src={userinfo.avatar} alt='adeonir' />
    <h1>{userinfo.fullname}</h1>
    <a href={`https://github.com/${userinfo.username}`}>{userinfo.username}</a>

    <div className='repos-info'>
      <ul>
        <li>
          Repositories: <span>{userinfo.repos}</span>
        </li>
        <li>
          Followers: <span>{userinfo.followers}</span>
        </li>
        <li>
          Following: <span>{userinfo.following}</span>
        </li>
      </ul>
    </div>
  </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    fullname: PropTypes.string,
    username: PropTypes.string,
    avatar: PropTypes.string,
    repos: PropTypes.array,
    followers: PropTypes.number,
    following: PropTypes.number
  }).isRequired
}

export default UserInfo
