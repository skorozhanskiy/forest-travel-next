import React from 'react';
import { Lobster } from 'next/font/google';
import styles from './logo.module.scss';

const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
});

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <div className={styles.container}>
      <h1 className={` ${lobster.className} ${styles.title}`}>ФорестТревел</h1>
    </div>
  );
};
