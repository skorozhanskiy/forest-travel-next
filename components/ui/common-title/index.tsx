import React from 'react';

interface Props {
  className?: string;
  titneName?: string;
}

export const CommonTitle: React.FC<Props> = ({ className, titneName }) => {
  return (
    <div className={className}>
      <h1 style={{ color: '#31405b', fontSize: '54px', fontWeight: '700', marginBottom: '40px' }}>
        {titneName}
      </h1>
    </div>
  );
};
