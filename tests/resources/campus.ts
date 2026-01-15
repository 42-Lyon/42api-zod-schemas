import { intraCampusSchema } from "../../src/resources/campus/campus.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraCampusSchema,
	fixtureName: "campuses",
	resourceName: "campus",
	getItemLabel: (item) => `"${item.name}" (id: ${item.id})`,
});
