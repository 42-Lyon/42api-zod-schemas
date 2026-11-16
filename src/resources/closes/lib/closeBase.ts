import z from "zod";
import { microUser } from "../../users/lib/micro.js";
import { intraCloseKindSchema, intraCloseStateSchema } from "./enums.js";

export const closeBase = z.looseObject({
	id: z.number(),
	reason: z.string(),
	state: intraCloseStateSchema,
	kind: intraCloseKindSchema,
	end_at: z.coerce.date().nullable(),
	primary_campus_id: z.number(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	user: microUser,
	closer: microUser,
});
