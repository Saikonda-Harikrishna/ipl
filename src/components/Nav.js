import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
        <ul>
            <li>
            <Link to='/mi'>MI</Link>
            </li>

            <li>
            <Link to='/rcb'>RCB</Link>
            </li>

            <li>
            <Link to='/csk'>CSK</Link>
            </li>

        </ul>
  )
}
