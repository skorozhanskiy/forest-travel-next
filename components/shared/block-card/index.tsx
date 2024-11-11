'use client';
import React from 'react';

import styles from './block-card.module.scss';

interface Props {
  imagesUrl?: string;
  altImg?: string;
  nameBlock?: string;
}

const OnCardClick = () => {
  console.log('click');
};

export const BlockCard: React.FC<Props> = ({ imagesUrl, altImg, nameBlock }) => {
  return (
    <div className={styles.container} onClick={OnCardClick}>
      <div className={styles.top}>
        <img src={imagesUrl} alt={altImg} className={styles.img} />
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.title}>{nameBlock}</h3>
      </div>
    </div>
  );
};
