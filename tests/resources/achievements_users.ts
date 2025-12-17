import { intraAchievementsUserSchema } from "../../src";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraAchievementsUserSchema,
	fixtureName: "achievements_users",
	resourceName: "achievements_user",
	getItemLabel: (item) => `id ${item.id}`,
});
