import { intraTeamSchema } from "../../src/resources/teams/team.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraTeamSchema,
	fixtureName: "teams",
	resourceName: "team",
	getItemLabel: (item) => `"${item.name}" (id: ${item.id})`,
});

testSchemaWithFixtures({
	schema: intraTeamSchema,
	fixtureName: "teams_in_evaluation",
	resourceName: "team",
	getItemLabel: (item) => `"${item.name}" (id: ${item.id})`,
})
