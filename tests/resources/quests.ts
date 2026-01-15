import { intraQuestSchema } from "../../src/resources/quests/quest.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraQuestSchema,
	fixtureName: "quests",
	resourceName: "quest",
	getItemLabel: (item) => `"${item.name}" (id: ${item.id})`,
});
