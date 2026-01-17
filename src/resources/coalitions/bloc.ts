import z from "zod";
import { intraCoalitionSchema } from "./coalition.js";

export const intraBlocSchema = z.looseObject({
	id: z.number(),
	campus_id: z.number(),
	cursus_id: z.number(),
	squad_size: z.number().nullable(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	coalitions: z.array(intraCoalitionSchema),
});

export type IntraBloc = z.infer<typeof intraBlocSchema>;
