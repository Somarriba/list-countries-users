import { DocumentNode, useQuery } from "@apollo/react-hooks";
import { Users } from "../types/users";

export function UsersQuery(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery<Users>(gqlQuery);
  return { loading, error, data };
}
