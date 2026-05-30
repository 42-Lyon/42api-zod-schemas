import { intraScaleSchema } from "../../src/index.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraScaleSchema,
	fixtureName: "scales",
	resourceName: "scale",
	getItemLabel: (item) => `id: ${item.id}`,
});
