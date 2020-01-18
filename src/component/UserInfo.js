import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars3.githubusercontent.com/u/3428733?v=4' alt='adeonir' />
    <h1>Adeonir Kohl</h1>
    <a href='https://github.com/adeonir'>adeonir</a>

    <div className='repos-info'>
      <ul>
        <li>
          Repositories: <span>35</span>
        </li>
        <li>
          Followers: <span>99</span>
        </li>
        <li>
          Following: <span>137</span>
        </li>
      </ul>
    </div>
  </div>
)

export default UserInfo
