import z from "zod";
import { intraUserSchema } from "../users/users.js";
import { eventBase } from "./lib/eventBase.js";

export const intraEventsUserSchema = z.object({
	id: z.number(),
	event_id: z.number(),
	user_id: z.number(),
	user: intraUserSchema,
	event: eventBase,
});

export type IntraEventsUser = z.infer<typeof intraEventsUserSchema>;
