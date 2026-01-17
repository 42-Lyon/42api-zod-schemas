import z from "zod";

export const intraCoalitionsUser = z.looseObject({
	id: z.number(),
	coalition_id: z.number(),
	user_id: z.number(),
	score: z.number(),
	rank: z.number(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});

export type IntraCoalitionsUser = z.infer<typeof intraCoalitionsUser>;
