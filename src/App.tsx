import React from 'react';
import './App.css';
import CountriesList from './components/countryList';
import { GET_USERS } from "./gql/graphql";
import { UsersQuery } from './query/usersQuery';

const App: React.FC = () => {
  const { loading, error, data } = UsersQuery(GET_USERS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong!</h1>;

  return (
    <div className="App">
      <h1>Code Challenge.</h1>
      <CountriesList users={data?.users} />
    </div>
  );
};

export default App;7