import z from "zod";

export const innerFlag = z.looseObject({
	id: z.number(),
	name: z.string(),
	positive: z.boolean(),
	icon: z.string(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});
