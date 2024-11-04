import React from 'react';
import styles from './header.module.scss';

import { Logo } from '../logo';
import { Nav } from '../nav';

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Logo />
        <Nav />
      </div>
    </header>
  );
};
