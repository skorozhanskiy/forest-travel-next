import React from 'react';

interface Props {
  className?: string;
}

const styles = require('./footer.module.scss');
export const Footer: React.FC<Props> = ({ className }) => {
  return <footer className={styles.container}>footer</footer>;
};
