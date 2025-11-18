import z from "zod";

export const intraPoolSchema = z.object({
	id: z.number().positive(),
	current_points: z.number(),
	max_points: z.number(),
	cursus_id: z.number().positive(),
	campus_id: z.number().positive(),
});

export type intraPool = z.infer<typeof intraPoolSchema>;

