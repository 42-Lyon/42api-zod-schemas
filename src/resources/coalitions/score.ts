import z from "zod";

export const intraScoreSchema = z.looseObject({
	id: z.number(),
	coalition_id: z.number(),
	scoreable_id: z.number().nullable(),
	scoreable_type: z.string().nullable(),
	coalitions_user_id: z.number().nullable(),
	calculation_id: z.number().nullable(),
	value: z.number(),
	reason: z.string(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});

export type IntraScore = z.infer<typeof intraScoreSchema>;
