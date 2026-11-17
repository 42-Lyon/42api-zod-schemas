import z from "zod";
import { eventBase } from "./lib/eventBase.js";

export const intraEventSchema = eventBase.extend({
	themes: z.array(
		z.object({
			id: z.number(),
			name: z.string(),
			created_at: z.coerce.date(),
			updated_at: z.coerce.date(),
		}),
	),
});

export type IntraEvent = z.infer<typeof intraEventSchema>;
