import { closeBase } from "../closes/lib/closeBase.js";
import { communityServiceBase } from "./lib/communityServiceBase.js";
import z from "zod";

export const intraCommunityServiceSchema = communityServiceBase.extend({
	close: closeBase,
});

export type IntraCommunityService = z.infer<typeof intraCommunityServiceSchema>;
