import React from 'react';
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>Alvrin header</h1>
        <nav>
          <ActiveLink activeClassName={styles.active} href='/' linkTo='Home' />
          <ActiveLink activeClassName={styles.active} href='/posts' linkTo='Posts' />
        </nav>
      </div>
    </header>
  );
}
