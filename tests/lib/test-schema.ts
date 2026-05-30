import { describe, expect, test } from "@jest/globals";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import z from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface TestSchemaOptions<T> {
	schema: z.ZodSchema<T>;
	fixtureName: string;
	resourceName: string;
	getItemId?: (item: any) => string | number;
	getItemLabel?: (item: any) => string;
}

/**
 * Helper function to load fixtures and test a Zod schema against them
 */
export function testSchemaWithFixtures<T>({
	schema,
	fixtureName,
	resourceName,
	getItemId = (item) => item.id,
	getItemLabel = (item) => getItemId(item),
}: TestSchemaOptions<T>) {
	describe(`${resourceName} schema`, () => {
		let validItems: any[] = [];

		try {
			const fixturesPath = join(__dirname, `../resources/fixtures/${fixtureName}.json`);
			const data = readFileSync(fixturesPath, "utf-8");
			validItems = JSON.parse(data);
		} catch (error) {
			console.error(`Failed to load ${fixtureName} fixtures:`, error);
			console.error("Run: npm run fetch-fixtures");
		}

		describe(`valid ${resourceName}`, () => {
			test(`should have loaded ${resourceName} from fixtures`, () => {
				expect(validItems.length).toBeGreaterThan(0);
			});
		});

		// Dynamically generate one test per item
		if (validItems.length > 0) {
			test(`should validate all ${resourceName}`, () => {
				validItems.forEach((item, index) => {
					const result = schema.safeParse(item);
					if (!result.success) {
						console.error(
							`\nFailed: ${resourceName} (${getItemLabel(item)}, index ${index}):`,
							item,
						);
						console.error("Validation errors:", result.error);
					}
					expect(result.success).toBe(true);
				});
			});
		}
	});
}
