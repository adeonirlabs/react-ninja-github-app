import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ajax from '@fdaciuk/ajax'

import Search from './component/Search'
import UserInfo from './component/UserInfo'
import Actions from './component/Actions'
import Repos from './component/Repos'

import './App.scss'

const url = 'https://api.github.com/users'

class App extends Component {
  state = {
    userinfo: null,
    repos: [],
    starred: []
  }

  handleSearch(e) {
    const value = e.target.value
    const key = e.which || e.keyCode
    const enter = 13
    if (key === enter) {
      ajax()
        .get(`${url}/${value}`)
        .then(result => {
          this.setState({
            userinfo: {
              fullname: result.name,
              username: result.login,
              avatar: result.avatar_url,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          })
        })
    }
  }

  getRepos(type) {
    const { username } = this.state.userinfo

    return e => {
      ajax()
        .get(`${url}/${username}/${type}`)
        .then(result => {
          this.setState({
            [type]: result.map(repo => ({
              name: repo.name,
              link: repo.html_url
            }))
          })
        })
    }
  }

  render() {
    const { userinfo, repos, starred } = this.state

    return (
      <div className='app'>
        <Search handleSearch={e => this.handleSearch(e)} />
        {!!userinfo && <UserInfo userinfo={userinfo} />}
        {!!userinfo && <Actions handleRepos={this.getRepos('repos')} handleStarred={this.getRepos('starred')} />}
        {!!repos.length && <Repos className='repos' title='Repositórios' repos={repos} />}
        {!!starred.length && <Repos className='stars' title='Favoritos' repos={starred} />}
      </div>
    )
  }
}

App.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array,
  starred: PropTypes.array
}

export default App
