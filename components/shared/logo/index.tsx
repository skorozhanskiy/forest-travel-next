import React from 'react';

import { Lobster } from 'next/font/google';

const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
});

interface Props {
  className?: string;
}

const styles = require('./logo.module.scss');
export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <div className={styles.container}>
      <h1 className={` ${lobster.className} ${styles.title}`}>ФорестТревел</h1>
    </div>
  );
};
