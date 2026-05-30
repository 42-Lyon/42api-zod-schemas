import { intraAmendmentSchema } from "../../src/index.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraAmendmentSchema,
	fixtureName: "amendments",
	resourceName: "amendment",
	getItemLabel: (item) => `id: ${item.id}`,
});