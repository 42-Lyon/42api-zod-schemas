import { FortytwoIntraClient } from "@ibertran/fortytwo-intra-client";
import dotenv from "dotenv";
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const CLIENT_ID = process.env.INTRA_CLIENT_ID || "";
const CLIENT_SECRET = process.env.INTRA_CLIENT_SECRET || "";
const RATE = Number(process.env.INTRA_CLIENT_REQ_PER_SEC) || 2;

interface ResourceConfig {
	name: string;
	endpoint: string;
	maxPage?: number;
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
		name: "campuses",
		endpoint: "/v2/campus",
	},
];

async function fetchAllFixtures() {
	if (!CLIENT_ID || !CLIENT_SECRET) {
		console.error("Error: INTRA_CLIENT_ID and INTRA_CLIENT_SECRET must be set");
		process.exit(1);
	}

	const ic = new FortytwoIntraClient(CLIENT_ID, CLIENT_SECRET, {
		rateLimitMaxRequests: RATE,
	});

	const fixturesDir = join(__dirname, "../tests/resources/fixtures");
	mkdirSync(fixturesDir, { recursive: true });

	for (const resource of RESOURCES) {
		try {
			console.log(`Fetching ${resource.name}...`);
			const data = await ic.getAll(resource.endpoint, resource.maxPage ? { maxPages: resource.maxPage } : {});

			const outputPath = join(fixturesDir, `${resource.name}.json`);
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
