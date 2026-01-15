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

interface SpecificResourceConfig {
	name: string; // used for output file prefix
	singleItemEndpointPrefix: string; // e.g. "/v2/users" to build "/v2/users/:id"
	ids: (number | string)[]; // list of IDs to fetch for this resource
}

// Configure the specific resources and IDs to fetch here
const SPECIFIC_RESOURCES: SpecificResourceConfig[] = [
	// Example: fetch detailed users
	// { name: "users", singleItemEndpointPrefix: "/v2/users", ids: [1234, 5678] },
	{ name: "user", singleItemEndpointPrefix: "/v2/users/", ids: ["chmaubla", "ibertran", "cameo", "cdomet-d", "ohrete", "adegas", "nguez"] }
];

async function fetchItemsById(
	ic: FortytwoIntraClient,
	resource: SpecificResourceConfig,
	fixturesDir: string
) {
	const ids = resource.ids || [];
	const prefix = resource.singleItemEndpointPrefix;
	if (!ids.length || !prefix) return;
	console.log(`Fetching ${resource.name} by id: ${ids.join(", ")}`);
	const results: any[] = [];
	for (const id of ids) {
		try {
			const data = await ic.get(`${prefix}/${id}`);
			results.push(data);
			console.log(`✓ Fetched ${resource.name} ${id}`);
		} catch (error) {
			console.error(`✗ Failed to fetch ${resource.name} ${id}:`, error);
		}
	}
	const outputPath = join(fixturesDir, `${resource.name}_by_id.json`);
	writeFileSync(outputPath, JSON.stringify(results, null, 2));
	console.log(`✓ Saved ${results.length} ${resource.name} to: ${outputPath}\n`);
}

async function fetchSpecificFixtures() {
	if (!CLIENT_ID || !CLIENT_SECRET) {
		console.error("Error: INTRA_CLIENT_ID and INTRA_CLIENT_SECRET must be set");
		process.exit(1);
	}

	const ic = new FortytwoIntraClient(CLIENT_ID, CLIENT_SECRET, {
		rateLimitMaxRequests: RATE,
	});

	const fixturesDir = join(__dirname, "../tests/resources/fixtures");
	mkdirSync(fixturesDir, { recursive: true });

	if (!SPECIFIC_RESOURCES.length) {
		console.warn("No specific resources configured. Edit SPECIFIC_RESOURCES in scripts/fetch-specific-users.ts");
	}

	for (const resource of SPECIFIC_RESOURCES) {
		await fetchItemsById(ic, resource, fixturesDir);
	}

	console.log("✓ Specific fixture generation complete!");
}

fetchSpecificFixtures().catch((error) => {
	console.error("Fatal error:", error);
	process.exit(1);
});
