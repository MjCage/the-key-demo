import { gql } from "@apollo/client";

const LOGIN_USER = gql`
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

const GET_USER_INFO = gql`
	query CurrentUser {
		Viewer {
			Auth {
				currentUser {
					user {
						name
					}
				}
			}
		}
	}
`;

export { LOGIN_USER, GET_USER_INFO };
