import z from "zod";

export const intraExperienceSchema = z.looseObject({
	id: z.number(),
	cursus_id: z.number(),
	experiancable: z.looseObject({
		project: z.looseObject({
			id: z.number(),
			slug: z.string(),
		})
	})
});

export type IntraExperience = z.infer<typeof intraExperienceSchema>;
