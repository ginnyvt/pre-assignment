import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Loading from '../UI/Loading';

import classes from './UserDetails.module.css';

const API = 'https://jsonplaceholder.typicode.com/users';

const UserDetails = (props) => {
  const { userId } = useParams();
  const history = useHistory();

  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      const getUser = async () => {
        const res = await fetch(`${API}/${userId}`);
        const user = await res.json();
        console.log(user);
        setIsLoading(false);
        setUserDetails(user);
      };

      getUser();
    } catch (err) {}
  }, []);

  const renderUserDetails = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (userDetails) {
      return (
        <div className={classes.flex}>
          <Card className={classes['user-details']}>
            <article>
              <div className={classes['details__title']}>
                <h3>User Details</h3>
              </div>
              <div className={classes.details}>
                <ul key={userDetails.id} className={classes['details-list']}>
                  <li>- name:{userDetails.name}</li>
                  <li>- username:{userDetails.username}</li>
                  <li>- email:{userDetails.email}</li>
                  <li>- phone:{userDetails.phone}</li>
                  <li>- company:{userDetails.company.name}</li>
                  <li>- website:{userDetails.website}</li>
                  <li>
                    - address:
                    <ul className={classes['address-details']}>
                      <li>street: {userDetails.address.street}</li>
                      <li>suite: {userDetails.address.suite}</li>
                      <li>city: {userDetails.address.city}</li>
                      <li>zipcode: {userDetails.address.zipcode}</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className={classes.actions}>
                <Button onClick={goBackHomeHandler}>Back</Button>
              </div>
            </article>
          </Card>
        </div>
      );
    } else {
      return null;
    }
  };

  const goBackHomeHandler = () => {
    history.push('/');
  };

  return renderUserDetails();
};

export default UserDetails;
