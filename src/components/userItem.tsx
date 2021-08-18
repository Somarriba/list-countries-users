import * as React from "react";
import { User } from "../types/users";

type Props = {
  user: User;
};

const UserItem: React.FC<Props> = ({ user }) => {
  const { name, gender, location, registered } = user;

  return (
    <div className={`${gender} "userItem"`} id={location.country}>
      <h1>{name.first} {name.last}</h1>
      <div>Gender: {gender}</div>
      <div>City: {location.city}</div>
      <div>State: {location.state}</div>
      <div>Date registered: {new Date(registered).toLocaleTimeString()}</div>
    </div>
  );
};

export default UserItem;