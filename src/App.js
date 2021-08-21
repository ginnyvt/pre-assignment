import React, { useEffect, useState } from 'react';
import UsersList from './components/Users/UsersList';
import Loading from './components/UI/Loading';

const API = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [usersList, setUsersList] = useState([]);

  const getUsers = async () => {
    setIsLoading(true);
    const res = await fetch(API);
    const users = await res.json();
    console.log(users);
    setUsersList(users);
  };

  useEffect(() => {
    getUsers();
    setIsLoading(false);
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <UsersList users={usersList} />
    </>
  );
};

export default App;
