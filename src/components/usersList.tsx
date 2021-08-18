import * as React from 'react';
import { Users } from '../types/users';
import UserItem from './userItem';

type Props = {
  users: Users;
};

const UsersList: React.FC<Props> = ({ users }) => {
  const usersList = (): JSX.Element[] => {
    return (
      users.users.map(user => {
        return <UserItem user={user}/>
      })
    )
  }
  return (
    <div className="usersList">
      {usersList()}
    </div>
  )
}

export default UsersList