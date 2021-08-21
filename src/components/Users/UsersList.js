import React from 'react';
import User from './User';

import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <section className={`section ${classes['users-section']}`}>
      <div className='container'>
        <div className='section__title'>
          <h2>Users List</h2>
        </div>

        <div className={classes['users-wrapper']}>
          {props.users.map((user) => {
            return <User key={user.id} {...user} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default UsersList;
