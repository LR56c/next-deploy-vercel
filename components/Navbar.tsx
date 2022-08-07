import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";
import { FC } from "react";

const menuItems : {text : string, href : string}[] = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  },
]

export const Navbar : FC = () => {
  return(
    <nav className={styles['menu-container']}>
      {
        menuItems.map(({href, text}) => (
          <ActiveLink key={href} href={href} text={text}/>
        ))
      }
    </nav>
  )
}