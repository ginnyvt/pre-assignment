import React from 'react';

import classes from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>Quynh Tran - Copyright&copy;{new Date().getFullYear()}</p>
      <div className={classes['social-icons']}>
        <a href='https://github.com/ginnyvt/pre-assignment.git'>
          <i class='fab fa-github'></i>
        </a>
        <a href='https://www.linkedin.com/in/ginnytran/'>
          <i class='fab fa-linkedin-in'></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
