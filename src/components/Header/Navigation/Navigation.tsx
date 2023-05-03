import React, { FC } from 'react'
import { LinkItem } from './Link/LinkItem'
import { NavLink } from './Link/LinkItem'

export type NavProps = {
    links: NavLink[],
    linkColor : string
}

const navLinks: NavProps = {
    links: [{
        name: "About",
        path: "/about", 
    },{
        name: "Blog",
        path: "/blog"   
    },{
        name: "News",
        path: "/news"   
    }],
    linkColor : 'text-red-700'
}

export const Navigation: FC = () => {

  return (
    <nav className="navigation">
        {navLinks.links && navLinks.links.map((link: NavLink, key) => (
            <LinkItem name={link.name} path={link.path} key={key} textColor={navLinks.linkColor} />
        ))}
    </nav>
  )
}