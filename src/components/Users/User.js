import React from 'react';
import Button from '../UI/Button';

import Card from '../UI/Card';

import classes from './User.module.css';

const User = (props) => {
  console.log(props);

  return (
    <Card>
      <article className={classes.user}>
        <div className={classes.avatar}>
          <span className={classes.default}>
            {props.name.substring(0, 1).toUpperCase()}
          </span>
        </div>

        <div className={classes.content}>
          <h4>{props.name}</h4>
          <p>@{props.username}</p>
          <a>{`http://${props.website}`}</a>
        </div>

        <div className={classes.actions}>
          <Button>More Details</Button>
        </div>
      </article>
    </Card>
  );
};

export default User;
