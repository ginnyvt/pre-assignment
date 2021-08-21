import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import UsersList from './components/Users/UsersList';
import Loading from './components/UI/Loading';
import UserDetails from './components/Users/UserDetails';
import Footer from './components/Footer/Footer';

const API = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [usersList, setUsersList] = useState([]);

  const getUsers = async () => {
    setIsLoading(true);
    const res = await fetch(API);
    const users = await res.json();
    console.log(users);
    setIsLoading(false);
    setUsersList(users);
  };

  useEffect(() => {
    getUsers();
    // setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Switch>
        <Route path='/:userId'>
          <UserDetails />
        </Route>
        <Route exact path='/'>
          <UsersList users={usersList} />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
