import z from "zod";
import { intraUserSchema } from "../users/users.js";
import { intraCursusKindSchema } from "./enums/kind.js";

export const intraCursusUserSchema = z.looseObject({
	id: z.number(),
	begin_at: z.coerce.date(),
	end_at: z.coerce.date().nullable(),
	grade: z.string().nullable(),
	level: z.number(),
	skills: z.array(
		z.looseObject({
			id: z.number(),
			name: z.string(),
			level: z.number(),
		}),
	),
	cursus_id: z.number(),
	has_coalition: z.boolean(),
	blackholed_at: z.coerce.date().nullable(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	user: intraUserSchema,
	cursus: z.looseObject({
		id: z.number(),
		created_at: z.coerce.date(),
		name: z.string(),
		slug: z.string(),
		kind: intraCursusKindSchema,
	}),
});

export type IntraCursusUser = z.infer<typeof intraCursusUserSchema>;
