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

const GET_CONTENT_NODES = gql`
	query GetContentNodes {
		Admin {
			Tree {
				GetContentNodes {
					edges {
						node {
							id
							structureDefinition {
								title
							}
						}
					}
				}
			}
		}
	}
`;

export { LOGIN_USER, GET_USER_INFO, GET_CONTENT_NODES };
