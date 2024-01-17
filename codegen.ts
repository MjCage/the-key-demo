import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "https://staging.api.constellation.academy/api/graphql",
	documents: ["src/utils/schemas.ts"],
	generates: {
		"./src/__generated__/": {
			preset: "client",
			plugins: [],
			presetConfig: {
				gqlTagName: "gql",
			},
		},
	},
	ignoreNoDocuments: true,
};

export default config;
