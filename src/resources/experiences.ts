import z from "zod";

export const intraExperienceSchema = z.object({
	id: z.number(),
	cursus_id: z.number(),
	experiancable: z.object({
		project: z.object({
			id: z.number(),
			slug: z.string(),
		})
	})
});

export type IntraExperience = z.infer<typeof intraExperienceSchema>;
