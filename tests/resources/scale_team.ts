import { scaleTeamSchema } from "../../src/resources/scales/scale_team.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: scaleTeamSchema,
	fixtureName: "scale_teams_random",
	resourceName: "scale_team",
	getItemLabel: (item) => `id: ${item.id}`,
});

testSchemaWithFixtures({
	schema: scaleTeamSchema,
	fixtureName: "future_scales",
	resourceName: "scale_team",
	getItemLabel: (item) => `id: ${item.id}`,
});
