import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Search from './component/Search'
import UserInfo from './component/UserInfo'
import Actions from './component/Actions'
import Repos from './component/Repos'

import './App.scss'

class App extends Component {
  state = {
    userinfo: {
      fullname: 'Adeonir Kohl',
      username: 'adeonir',
      repos: 35,
      follower: 99,
      following: 137
    },
    repos: [
      {
        name: 'Nome do repositório',
        link: '#'
      },
      {
        name: 'Nome do repositório',
        link: '#'
      },
      {
        name: 'Nome do repositório',
        link: '#'
      }
    ],
    stars: [
      {
        name: 'Nome do repositório',
        link: '#'
      },
      {
        name: 'Nome do repositório',
        link: '#'
      },
      {
        name: 'Nome do repositório',
        link: '#'
      }
    ]
  }

  render() {
    const { userinfo, repos, stars } = this.state

    return (
      <div className='app'>
        <Search />
        {!!userinfo && <UserInfo userinfo={userinfo} />}
        {!!userinfo && <Actions />}
        {!!repos.length && <Repos className='repos' title='Repositórios' repos={repos} />}
        {!!stars.length && <Repos className='stars' title='Favoritos' repos={stars} />}
      </div>
    )
  }
}

App.propTypes = {
  userinfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  stars: PropTypes.array.isRequired
}

export default App
