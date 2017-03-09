
import React from 'react'
export default function Repo({params}){
  const {username, repoName} = params
  return (
      <p>用户名---{username}, 仓库名---{repoName}</p>
  )
}