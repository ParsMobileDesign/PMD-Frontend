import React from 'react'
import {NavLink} from 'react-router-dom'
import './menu-item.scss'

const MenuItem=({title,path})=>
{
return <NavLink to={path} className='menu-link'>{title}</NavLink>
}
export default MenuItem;