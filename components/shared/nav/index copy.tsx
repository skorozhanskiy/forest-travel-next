import React from 'react';
import Link from 'next/link';
import { routes } from '../../../routes';
import styles from './nav.module.scss';
interface Props {
  className?: string;
}

export const Nav: React.FC<Props> = ({ className }) => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {routes.map((route) => (
          <li className={styles.items} key={route.id}>
            <Link className={styles.link} href={route.link}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
