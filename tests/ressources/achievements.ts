import { describe, expect, test } from "@jest/globals";
import { achievementSchema } from "../../src/resources/achievement.js";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe("achievementSchema", () => {
	let validAchievements: any[] = [];

	try {
		const fixturesPath = join(__dirname, "fixtures/achievements.json");
		const data = readFileSync(fixturesPath, "utf-8");
		validAchievements = JSON.parse(data);
	} catch (error) {
		console.error("Failed to load achievements fixtures:", error);
		console.error("Run: npm run fetch-fixtures");
	}

	describe("valid achievements", () => {
		test("should have loaded achievements from fixtures", () => {
			expect(validAchievements.length).toBeGreaterThan(0);
		});
	});

	// Dynamically generate one test per achievement
	if (validAchievements.length > 0) {
		validAchievements.forEach((achievement, index) => {
			test(`should validate achievement: "${achievement.name}" (id: ${achievement.id})`, () => {
				const result = achievementSchema.safeParse(achievement);
				if (!result.success) {
					console.error(`\nFailed: Achievement "${achievement.name}" (index ${index}):`, achievement);
					console.error("Validation errors:", result.error);
				}
				expect(result.success).toBe(true);
			});
		});
	}
});
