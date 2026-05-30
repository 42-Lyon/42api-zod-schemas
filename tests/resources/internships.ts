import { intraInternshipSchema } from "../../src/index.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
  schema: intraInternshipSchema,
  fixtureName: "internships",
  resourceName: "internship",
  getItemLabel: (item) => `id: ${item.id}`,
});
