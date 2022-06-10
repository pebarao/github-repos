import { useState, useEffect }   from 'react'
import React from 'react'

import { RepositoryItem } from './RepositoryItem'
import '../styles/repositories.scss'


export function RepositoryList(){
  const [repository, setRepository] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users/pebaraoo/repos")
    .then(response => response.json())
    .then(data => setRepository(data))
  }, [])
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
       <RepositoryItem />
       <RepositoryItem />
       <RepositoryItem />
      </ul>
    </section>
  )
}