import React from 'react';

import { Logo } from '../logo';
import { Nav } from '../nav';

interface Props {
  className?: string;
}

const styles = require('./header.module.scss');

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Logo />
        <Nav />
      </div>
    </header>
  );
};
