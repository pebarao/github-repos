import React from 'react'

interface repositoryItemProps {
  repository:{
  name: String,
  description: string,
  html_url: string
  }
}

export function RepositoryItem(props: repositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}> acessar repositório</a>
    </li>
  )
}