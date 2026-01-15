import { intraFullUserSchema } from "../../src/index.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraFullUserSchema,
	fixtureName: "user_by_id",
	resourceName: "user",
	getItemLabel: (item) => item.login ?? `id ${item.id}`,
});
