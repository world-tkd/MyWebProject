import React from 'react'
import {Link} from 'react-router'
export default function NavLink(props) {
  console.log({...props})
  //在组件中传递{...props}等同于to = {to}，即其中的属性值划等于号
  return <Link {...props} activeClassName="active"/>
}