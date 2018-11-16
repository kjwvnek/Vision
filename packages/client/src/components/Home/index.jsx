import React from 'react'

const cx = require('classnames/bind').bind(require('./home.scss'));

const Home = props => {
  return (
    <div className={cx('home')}>
      Home
    </div>
  );
};

export default Home
