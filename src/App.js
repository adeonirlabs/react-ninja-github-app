import React from 'react'

function App() {
  return (
    <div className='app'>
      <div className='search'>
        <input type='search' placeholder='Digite o nome do usuário no Github' />
      </div>

      <div className='user-info'>
        <img src='https://avatars3.githubusercontent.com/u/3428733?v=4' alt='adeonir' />
        <h1 className='username'>
          <a href='https://github.com/adeonir'>Adeonir Kohl</a>
        </h1>
        <div className='repos-info'>
          <ul>
            <li>Repositórios: 35</li>
            <li>Seguidores: 99</li>
            <li>Seguindo: 137</li>
          </ul>
        </div>
      </div>

      <div className='actions'>
        <button>Ver repositórios</button>
        <button>Ver favoritos</button>
      </div>

      <div className='repos'>
        <h2>Repositórios</h2>
        <ul>
          <li>
            <a href='.'>Nome do repositório</a>
          </li>
        </ul>
      </div>

      <div className='starred'>
        <h2>Favoritos</h2>
        <ul>
          <li>
            <a href='.'>Nome do repositório</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
