import z from "zod";
import { intraEventKindSchema } from "./enums.js";

export const eventBase = z.object({
	id: z.number(),
	name: z.string(),
	description: z.string(),
	location: z.string(),
	kind: intraEventKindSchema,
	max_people: z.number().nullable(),
	nbr_subscribers: z.number(),
	begin_at: z.coerce.date(),
	end_at: z.coerce.date(),
	campus_ids: z.array(z.number()),
	cursus_ids: z.array(z.number()),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	prohibition_of_cancellation: z.number().nullable(),
	waitlist: z
		.object({
			id: z.number(),
			waitlistable_id: z.number(),
			waitlistable_type: z.string(),
			created_at: z.coerce.date(),
			updated_at: z.coerce.date(),
		})
		.nullable(),
});
