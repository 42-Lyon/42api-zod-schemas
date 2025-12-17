import { intraTransactionSchema } from "../../src";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraTransactionSchema,
	fixtureName: "transactions",
	resourceName: "transaction",
	getItemLabel: (item) => `id ${item.id}`,
});
