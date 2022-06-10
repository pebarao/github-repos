import React from 'react'
import { RepositoryItem } from './RepositoryItem'

export function RepositoryList(){
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
       <RepositoryItem repository={Unform}/>
       <RepositoryItem />
       <RepositoryItem />
      </ul>
    </section>
  )
}