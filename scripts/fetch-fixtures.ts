import { FortytwoIntraClient } from "@ibertran/fortytwo-intra-client";
import dotenv from "dotenv";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const CLIENT_ID = process.env.INTRA_CLIENT_ID || "";
const CLIENT_SECRET = process.env.INTRA_CLIENT_SECRET || "";
const RATE = Number(process.env.INTRA_CLIENT_REQ_PER_SEC) || 2;
const SCOPES = ["public", "projects"];

interface ResourceConfig {
	name: string;
	endpoint: string;
	maxPage?: number;
	perPage?: number;
}

const RESOURCES: ResourceConfig[] = [
	{
		name: "achievements",
		endpoint: "/v2/achievements",
	},
	{
		name: "achievements_users",
		endpoint: "/v2/achievements_users",
		maxPage: 10
	},
	{
		name: "transactions",
		endpoint: "/v2/transactions",
		maxPage: 50
	},
	{
		name: "campuses",
		endpoint: "/v2/campus",
	},
	{
		name: "projects",
		endpoint: "/v2/projects",
		maxPage: 50,
	},
	{
		name: "projects_users",
		endpoint: "/v2/projects_users",
		maxPage: 50,
	},
	{
		name: "quests",
		endpoint: "/v2/quests",
	},
	{
		name: "quests_users",
		endpoint: "/v2/quests_users",
		maxPage: 50,
	},
	{
		name: "teams",
		endpoint: "/v2/teams",
		maxPage: 50,
	},
	{
		name: "teams_users",
		endpoint: "/v2/teams_users",
		maxPage: 50,
	},
	{
		name: "teams_uploads",
		endpoint: "/v2/teams_uploads",
		maxPage: 50,
	},
	{
		name: "flags",
		endpoint: "/v2/flags"
	},
	{
		name: "scales",
		endpoint: "/v2/scales",
		maxPage: 50,
		perPage: 30,
	},
];

async function fetchAllFixtures() {
	if (!CLIENT_ID || !CLIENT_SECRET) {
		console.error("Error: INTRA_CLIENT_ID and INTRA_CLIENT_SECRET must be set");
		process.exit(1);
	}

	const ic = new FortytwoIntraClient(CLIENT_ID, CLIENT_SECRET, {
		rateLimitMaxRequests: RATE,
		scopes: SCOPES
	});

	const fixturesDir = join(__dirname, "../tests/resources/fixtures");
	mkdirSync(fixturesDir, { recursive: true });

	for (const resource of RESOURCES) {
		const outputPath = join(fixturesDir, `${resource.name}.json`);

		// Skip if fixture already exists
		if (existsSync(outputPath)) {
			console.log(`⊘ Skipping ${resource.name} (already loaded)`);
			console.log(`  File: ${outputPath}\n`);
			continue;
		}

		try {
			console.log(`Fetching ${resource.name}...`);
			const data = await ic.getAll(resource.endpoint, resource.maxPage ? { maxPages: resource.maxPage, perPage: resource.perPage || 100 } : {});

			writeFileSync(outputPath, JSON.stringify(data, null, 2));

			const count = Array.isArray(data) ? data.length : 1;
			console.log(`✓ Successfully fetched ${count} ${resource.name}`);
			console.log(`  Saved to: ${outputPath}\n`);
		} catch (error) {
			console.error(`✗ Failed to fetch ${resource.name}:`, error);
			console.error(`  Skipping ${resource.name}...\n`);
		}
	}

	console.log("✓ Fixture generation complete!");
}

fetchAllFixtures().catch((error) => {
	console.error("Fatal error:", error);
	process.exit(1);
});
