import { intraTeamsUserSchema } from "../../src/resources/teams/teams_user.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraTeamsUserSchema,
	fixtureName: "teams_users",
	resourceName: "teams_user",
	getItemLabel: (item) => `"${item.name}" (id: ${item.id})`,
});
