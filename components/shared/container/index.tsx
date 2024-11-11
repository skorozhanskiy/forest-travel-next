import React from 'react';
import styles from './container.module.scss';

interface Props {
  children?: any;
}

export const Container: React.FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
