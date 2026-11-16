import { intraCommunityServiceSchema } from "../../src/index.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraCommunityServiceSchema,
	fixtureName: "community_services",
	resourceName: "community_service",
	getItemLabel: (item) => `id: ${item.id}, close: ${item.close?.id}`,
});
