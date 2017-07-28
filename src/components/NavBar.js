import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props){
  return (
    <div className='nav'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/merits'>Merits</Link>
        </li>
        <li>
          <Link to='/properties'>Properties</Link>
        </li>
      </ul>
    </div>
  )
}
