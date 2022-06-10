import { useState, useEffect }   from 'react'
import React from 'react'
import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'

interface repository {
  name: string,
  description: string,
  html_url: string

}
export function RepositoryList(){
  const [repository, setRepository] = useState<repository[]>([])

  useEffect(() => {
    fetch("https://api.github.com/users/pebarao/repos")
    .then(response => response.json())
    .then(data => setRepository(data))
  }, [])

  console.log(repository)
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repository.map((repository) => {
           return <RepositoryItem key={repository.name}repository={repository} />
        })}
      </ul>
    </section>
  )
}