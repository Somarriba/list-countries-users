import gql from "graphql-tag";

export const GET_USERS = gql`
    query getUsers {
        users @rest(type: "User", path: "?results=100") {
            results {
                name {
                    first
                    last
                }
                gender
                location {
                    country
                    city
                    state
                }
                registered
            }
        }
    }
`;
