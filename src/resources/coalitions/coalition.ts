import z from "zod";

export const intraCoalitionSchema = z.looseObject({
	id: z.number(),
	name: z.string(),
	slug: z.string(),
	image_url: z.string(),
	cover_url: z.string().nullable(),
	color: z.string(),
	score: z.number(),
	user_id: z.number(),
});

export type IntraCoalition = z.infer<typeof intraCoalitionSchema>;
