import React from 'react';

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <a href="/" className={className}>
      <span>ФорестТревел</span>
    </a>
  );
};
