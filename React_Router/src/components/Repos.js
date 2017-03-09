
import React from 'react'
//import liItem from './liItem'
import {Link} from 'react-router'

export default class Repos extends React.Component {

  constructor(props){
    super(props)
    this.state= {
      repos:[
        {username: 'Faceback', repoName: 'react'},
        {username: 'Google', repoName: 'google'},
        {username: 'Ant', repoName: 'antd'},
        {username: 'Baidu', repoName: 'navigor'}
      ]
    }
  }

  render () {
    const reposList= this.state.repos.map((repo,index) => {
        const to= `/repos/${repo.username}/${repo.repoName}`
        return(
            <li key= {index}>
             {/* <liItem to= {to}/>{repo.username}*/}
              <Link to= {to} activeClassName="active">{repo.username}</Link>
            </li>
        )
    })
    return (
        <div>
          <h2>这是组件二的内容！</h2>
          <ul>
            {reposList}
          </ul>
          {this.props.children}
        </div>
    )
  }
}





















