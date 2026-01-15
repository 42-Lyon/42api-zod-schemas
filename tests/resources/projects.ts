import { intraProjectSchema } from "../../src/resources/projects/project.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraProjectSchema,
	fixtureName: "projects",
	resourceName: "project",
	getItemLabel: (item) => `"${item.name}" (id: ${item.id})`,
});
