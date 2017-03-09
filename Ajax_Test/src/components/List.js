import React from 'react'
import axios from 'axios'
import ListItems from './ListItems'
export default class List extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            firstVeiw : true,
            loading : false,
            users : null,
            errorMgs : null

        }
    }
    componentWillReceiveProps(nextprops){
        this.setState ({
            firstVeiw: false,
            loading:true
        })
        console.log( this.setState.firstVeiw)
        let {searchName} = nextprops
        const url =`https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
            .then(response => {
                const items = response.data.items
                //返回一个数组users
                const users = items.map(function (item) {
                    return {html_url:item.html_url,avatar_url: item.avatar_url, login:item.login}
                })
                this.setState({
                    loading:false,
                    users
                })
            })
            .catch(error => {
                this.setState  ({
                    loading:false,
                    errorMgs : error.message
                })
            })

    }
    render() {
        if(this.state.firstVeiw){
            return <h2>Enter name to search</h2>;
        }else if (this.state.loading){
            return <h2>Loading result...</h2>;
        }else if(this.state.errorMgs){
            return <h2>{this.state.errorMgs}</h2>;
        }else{
            const list=  this.state.users.map((user) => {
                const ser= {
                    key:user.html_url,
                    HTML:user.html_url,
                    avatar:user.avatar_url,
                    login:user.login
                }
                return <ListItems {...ser}/>
            }
        )
            return (

                <div className="row">
                    {list}
                </div>
            )
        } 
        }
}
