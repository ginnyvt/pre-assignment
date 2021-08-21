import React from 'react';
import { Link } from 'react-router-dom';

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
          <h3>{props.name}</h3>
          <p>@{props.username}</p>
          <a>{`http://${props.website}`}</a>
        </div>

        <div className={classes.actions}>
          <Link to={`/${props.id}`}>
            <Button>More Details</Button>
          </Link>
        </div>
      </article>
    </Card>
  );
};

export default User;
