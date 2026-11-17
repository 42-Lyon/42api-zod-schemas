import { intraEventSchema } from "../../src/index.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraEventSchema,
	fixtureName: "events",
	resourceName: "event",
	getItemLabel: (item) => `id: ${item.id}, name: ${item.name}`,
});
