import React, { Component } from 'react'

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
      avatar: 'https://avatars3.githubusercontent.com/u/3428733?v=4',
      repos: 35,
      followers: 99,
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

export default App
