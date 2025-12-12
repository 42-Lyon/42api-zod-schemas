import { describe, expect, test } from "@jest/globals";
import { achievementsUserSchema } from "../../src/resources/achievements/achievements_users.js";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe("achievementsUserSchema", () => {
	let validAchievementsUsers: any[] = [];

	try {
		const fixturesPath = join(__dirname, "fixtures/achievements_users.json");
		const data = readFileSync(fixturesPath, "utf-8");
		validAchievementsUsers = JSON.parse(data);
	} catch (error) {
		console.error("Failed to load achievements_users fixtures:", error);
		console.error("Run: npm run fetch-fixtures");
	}

	describe("valid achievements_users", () => {
		test("should have loaded achievements_users from fixtures", () => {
			expect(validAchievementsUsers.length).toBeGreaterThan(0);
		});
	});

	// Dynamically generate one test per achievements_user
	if (validAchievementsUsers.length > 0) {
		validAchievementsUsers.forEach((achievementsUser, index) => {
			test(`should validate achievements_user: id ${achievementsUser.id}`, () => {
				const result = achievementsUserSchema.safeParse(achievementsUser);
				if (!result.success) {
					console.error(`\nFailed: Achievements User (id: ${achievementsUser.id}, index ${index}):`, achievementsUser);
					console.error("Validation errors:", result.error);
				}
				expect(result.success).toBe(true);
			});
		});
	}
});
