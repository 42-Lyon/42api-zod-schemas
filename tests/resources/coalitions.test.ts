import { testSchemaWithFixtures } from "../lib/test-schema.js";
import { intraBlocSchema, intraCoalitionSchema, intraCoalitionsUserSchema, intraScoreSchema } from "../../src/index.js";

testSchemaWithFixtures({
	schema: intraCoalitionSchema,
	fixtureName: "coalitions",
	resourceName: "coalition",
	getItemLabel: (item) => `"${item.name}" (id: ${item.id})`,
});

testSchemaWithFixtures({
	schema: intraBlocSchema,
	fixtureName: "blocs",
	resourceName: "bloc",
	getItemLabel: (item) => `id ${item.id}`,
});

testSchemaWithFixtures({
	schema: intraCoalitionsUserSchema,
	fixtureName: "coalitions_users",
	resourceName: "coalitions_user",
	getItemLabel: (item) => `id ${item.id}`,
});

testSchemaWithFixtures({
	schema: intraScoreSchema,
	fixtureName: "scores",
	resourceName: "score",
	getItemLabel: (item) => `id ${item.id}`,
});
