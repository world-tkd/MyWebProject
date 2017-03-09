/**
 * Created by Administrator on 2017/3/9.
 */
import React from 'react'

export default class ListItems extends React.Component{
    render () {
        const {HTML,avatar,login}= this.props
        return (
            <div className="card">
                <a href={HTML} target="_blank">
                    <img src={avatar} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{login}</p>
            </div>
        )
    }
}

/*key={user.html_url}*/
