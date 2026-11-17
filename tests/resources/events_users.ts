import { intraEventsUserSchema } from "../../src/index.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraEventsUserSchema,
	fixtureName: "events_users",
	resourceName: "events_user",
	getItemLabel: (item) => `id: ${item.id}, event: ${item.event_id}, user: ${item.user?.login}`,
});
