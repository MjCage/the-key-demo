import gql from "graphql-tag";

export const LOGIN_USER = gql`
	mutation LoginJwt($input: LoginJwtInput!) {
		Auth {
			loginJwt(input: $input) {
				loginResult {
					jwtTokens {
						accessToken
					}
				}
			}
		}
	}
`;
