/**
 * Created by Administrator on 2017/3/8.
 */
import React from 'react'
import {Link} from 'react-router'
export default function liItem(props) {
    return <Link {...props} activeClassName="active"></Link>
}