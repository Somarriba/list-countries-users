export interface User {
  name: Name;
  gender: string;
  country: string;
  location: Location;
  registered: string;
}

export interface Users {
  users: User[];
}

export interface Name {
  first: string;
  last: string;
}

export interface Location {
  city: string;
  state: string;
  country: string;
}
