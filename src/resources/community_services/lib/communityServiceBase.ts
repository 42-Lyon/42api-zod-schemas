import z from "zod";
import { intraCommunityServiceStateSchema } from "./enums.js";

export const communityServiceBase = z.looseObject({
	id: z.number(),
	duration: z.number(),
	schedule_at: z.coerce.date().nullable(),
	occupation: z.string().nullable(),
	state: intraCommunityServiceStateSchema,
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});
