import { FortytwoIntraClient } from "@ibertran/fortytwo-intra-client";
import dotenv from "dotenv";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const CLIENT_ID = process.env.INTRA_CLIENT_ID || "";
const CLIENT_SECRET = process.env.INTRA_CLIENT_SECRET || "";
const RATE = Number(process.env.INTRA_CLIENT_REQ_PER_SEC) || 2;

async function fetchAchievements() {
	if (!CLIENT_ID || !CLIENT_SECRET) {
		console.error("Error: INTRA_CLIENT_ID and INTRA_CLIENT_SECRET must be set");
		process.exit(1);
	}

	console.log("Fetching achievements from 42 API...");

	const ic = new FortytwoIntraClient(CLIENT_ID, CLIENT_SECRET, {
		rateLimitMaxRequests: RATE,
	});

	try {
		const achievements = await ic.getAll("/v2/achievements");
		
		const outputPath = join(__dirname, "../tests/ressources/fixtures/achievements.json");
		
		writeFileSync(outputPath, JSON.stringify(achievements, null, 2));
		
		console.log(`✓ Successfully fetched ${achievements.length} achievements`);
		console.log(`✓ Saved to: ${outputPath}`);
	} catch (error) {
		console.error("Failed to fetch achievements:", error);
		process.exit(1);
	}
}

fetchAchievements();
