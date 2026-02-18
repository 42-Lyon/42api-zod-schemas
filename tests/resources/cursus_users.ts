import { testSchemaWithFixtures } from "../lib/test-schema.js";
import { intraCursusUserSchema } from "../../src/index.js";

testSchemaWithFixtures({
	schema: intraCursusUserSchema,
	fixtureName: "cursus_users",
	resourceName: "cursus_user",
	getItemLabel: (item) => `id ${item.id} (user: ${item.user.login}, cursus: ${item.cursus.name})`,
});
