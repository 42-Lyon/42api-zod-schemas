import { intraInternshipSchema, intraScaleSchema } from "../../src/index.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
  schema: intraInternshipSchema,
  fixtureName: "internships",
  resourceName: "insternship",
  getItemLabel: (item) => `id: ${item.id}`,
});
