import z from "zod";
import { communityServiceBase } from "../community_services/lib/communityServiceBase.js";
import { closeBase } from "./lib/closeBase.js";

export const intraCloseSchema = closeBase.extend({
	community_services: z.array(communityServiceBase),
});

export type IntraClose = z.infer<typeof intraCloseSchema>;
