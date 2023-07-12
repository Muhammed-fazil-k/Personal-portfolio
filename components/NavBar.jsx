import Link from 'next/link'
import React from 'react'
import styles from '../styles/NavBar.module.css'
//INtroduction
//skills 
//Contacts

const NavBar = () => {
  return (
    <nav className={styles["navbar-container"]}>
      <div className={styles["logo"]}><Link href='#'>Fazil</Link></div>
      <div className={styles["nav-links"]}>
        <ul>
            <li>
                <Link href='#'>About me</Link>
            </li>
            <li>
                <Link href='#'>Skills</Link>
            </li>
            <li>
                <Link href='#'>Contact</Link>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
