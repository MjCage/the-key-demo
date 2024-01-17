import { gql } from "../__generated__";

const LOGIN_USER = gql(/* GraphQL */ `
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
`);

const GET_USER_INFO = gql(/* GraphQL */ `
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
`);

const GET_CONTENT_NODES = gql(/* GraphQL */ `
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
`);

export { LOGIN_USER, GET_USER_INFO, GET_CONTENT_NODES };
