// Login user
export const queryLoginUser = gql`
  mutation LoginUser($user: UserLoginInput!) {
    loginUser(user: $user) {
      user {
        id
      }
      accessToken {
        token
        tokenType
      }
    }
  }
`;
export function variablesLoginUser(email: string, password: string): object {
  return {
    user: {
      emailAddress: email,
      password: password,
    },
  };
}
