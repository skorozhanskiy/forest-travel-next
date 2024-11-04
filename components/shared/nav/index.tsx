'use client';
import React from 'react';
import Link from 'next/link';
import { routes } from '../../../routes';

interface Props {
  className?: string;
}
const styles = require('./nav.module.scss');
export const Nav: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const openNavBar = () => {
    setOpen(!open);
  };
  console.log(open);
  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} ${open ? styles.active : ''}`}>
        <nav className={styles.nav}>
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
        <button onClick={openNavBar} className={styles.button}>
          Закрыть
        </button>
      </div>
      <button onClick={openNavBar} className={styles.button}>
        Открыть
      </button>
    </div>
  );
};
