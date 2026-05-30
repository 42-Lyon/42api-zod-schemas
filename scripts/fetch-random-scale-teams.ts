import { FortytwoIntraClient } from "@ibertran/fortytwo-intra-client";
import dotenv from "dotenv";
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const CLIENT_ID = process.env.INTRA_CLIENT_ID || "";
const CLIENT_SECRET = process.env.INTRA_CLIENT_SECRET || "";
const RATE = Number(process.env.INTRA_CLIENT_REQ_PER_SEC) || 2;
const SCOPES = ["public", "projects"];

function getRandomIds(count: number, min: number, max: number): number[] {
	const set = new Set<number>();
	while (set.size < count) {
		const id = Math.floor(Math.random() * (max - min + 1)) + min;
		set.add(id);
	}
	return Array.from(set);
}

async function main() {
	if (!CLIENT_ID || !CLIENT_SECRET) {
		console.error("Error: INTRA_CLIENT_ID and INTRA_CLIENT_SECRET must be set");
		process.exit(1);
	}

	const ic = new FortytwoIntraClient(CLIENT_ID, CLIENT_SECRET, {
		rateLimitMaxRequests: RATE,
		scopes: SCOPES,
	});

	const fixturesDir = join(__dirname, "../tests/resources/fixtures");
	mkdirSync(fixturesDir, { recursive: true });
	const outputPath = join(fixturesDir, `scale_teams_random.json`);

	const total = Number(process.argv[2]) || 100;
	const minId = 1;
	const maxId = 400000;

	// Load existing if present
	let allResults: any[] = [];
	if (existsSync(outputPath)) {
		try {
			const existing = JSON.parse(readFileSync(outputPath, "utf-8"));
			if (Array.isArray(existing)) allResults = existing;
		} catch (e) {
			console.warn("Warning: Could not parse existing output, starting fresh.");
		}
	}

	const ids = getRandomIds(total, minId, maxId);
	const existingIds = new Set(allResults.map((x) => x.id));

	for (const id of ids) {
		if (existingIds.has(id)) {
			console.log(`Skipping already-fetched scale_team: ${id}`);
			continue;
		}
		try {
			console.log(`Fetching scale_team: ${id}...`);
			const data = await ic.get(`/v2/scale_teams/${id}`);
			if (data) {
				allResults.push(data);
				existingIds.add(id);
			}
		} catch (error) {
			console.error(`✗ Failed to fetch scale_team: ${id}`, error);
		}
	}

	writeFileSync(outputPath, JSON.stringify(allResults, null, 2));
	console.log(`✓ Saved ${allResults.length} scale_teams to ${outputPath}`);
}

main().catch((error) => {
	console.error("Fatal error:", error);
	process.exit(1);
});
