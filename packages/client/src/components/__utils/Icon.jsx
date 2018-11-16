import React from 'react'

const icons = require.context('@assets/icons/', false, /\.*\.svg$/);
icons.keys().forEach(icons);

const Icon = props => {
  const { name, width, height, className } = props;
  return (
    <svg
      width={width}
      height={height}
      className={className}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon
