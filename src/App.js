import React from 'react'
import Search from './component/Search'
import UserInfo from './component/UserInfo'
import Actions from './component/Actions'
import Repos from './component/Repos'

function App() {
  return (
    <div className='app'>
      <Search />
      <UserInfo />
      <Actions />
      <Repos className='repos' title='Repositórios' repos={[{ name: 'Nome do repositório', link: '#' }]} />
      <Repos className='starred' title='Favoritos' repos={[{ name: 'Nome do repositório', link: '#' }]} />
    </div>
  )
}

export default App
