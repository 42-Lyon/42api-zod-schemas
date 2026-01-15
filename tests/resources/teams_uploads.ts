import { intraTeamsUploadSchema } from "../../src/resources/teams/teams_upload.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraTeamsUploadSchema,
	fixtureName: "teams_uploads",
	resourceName: "teams_uploads",
	getItemLabel: (item) => `id: ${item.id}`,
});
