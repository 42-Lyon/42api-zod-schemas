import { intraQuestsUserSchema } from "../../src/resources/quests/quests_users.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraQuestsUserSchema,
	fixtureName: "quests_users",
	resourceName: "quests_user",
	getItemLabel: (item) => `id ${item.id}`,
});
