import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Navigation } from './Navigation/Navigation'

export const Header: FC = () => {
  
  return (
    <header className="flex px-10 py-5 bg-blue-300">
      <Link to="/" className="header__logo">
        Logo
      </Link>
      <Navigation/>
    </header>
  )
}