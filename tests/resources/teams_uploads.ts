import { intraTeamsUploadsSchema } from "../../src/resources/teams/teams_uploads.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraTeamsUploadsSchema,
	fixtureName: "teams_uploads",
	resourceName: "teams_uploads",
	getItemLabel: (item) => `id: ${item.id}`,
});
