import { testSchemaWithFixtures } from "../lib/test-schema.js";
import { intraBlocSchema, intraCoalitionSchema, intraCoalitionsUser, intraScoreSchema } from "../../src/index.js";

testSchemaWithFixtures({
	schema: intraCoalitionSchema,
	fixtureName: "coalitions",
	resourceName: "coalition",
	getItemLabel: (item) => `"${item.name}" (id: ${item.id})`,
});

testSchemaWithFixtures({
	schema: intraBlocSchema,
	fixtureName: "blocs",
	resourceName: "blocs",
	getItemLabel: (item) => `id ${item.id}`,
});

testSchemaWithFixtures({
	schema: intraCoalitionsUser,
	fixtureName: "coalitions_users",
	resourceName: "coalitions_users",
	getItemLabel: (item) => `id ${item.id}`,
});

testSchemaWithFixtures({
	schema: intraScoreSchema,
	fixtureName: "scores",
	resourceName: "scores",
	getItemLabel: (item) => `id ${item.id}`,
});
