import { intraFlagSchema } from "../../src";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraFlagSchema,
	fixtureName: "flags",
	resourceName: "flag",
	getItemLabel: (item) => `id ${item.id}`,
});
