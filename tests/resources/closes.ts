import { intraCloseSchema } from "../../src/index.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraCloseSchema,
	fixtureName: "closes",
	resourceName: "close",
	getItemLabel: (item) => `id: ${item.id}, user: ${item.user?.login}`,
});
