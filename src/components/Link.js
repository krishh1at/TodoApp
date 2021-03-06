import React from 'react';

const Link = ({
  active,
  onClick,
  children
}) => {
  if(active) {
    return <span>{children}</span>
  }

  return (
    <a
      href='#Todo'
      onClick={ e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

export default Link;
