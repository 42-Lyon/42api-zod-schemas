import z from "zod";
import { innerFlag } from "../flags/lib/inner.js";

export const intraScaleSchema = z.looseObject({
	id: z.number(),
	evaluation_id: z.number(),
	name: z.string(),
	is_primary: z.boolean(),
	comment: z.string(),
	introduction_md: z.string(),
	disclaimer_md: z.string().nullable(),
	guidelines_md: z.string(),
	created_at: z.coerce.date(),
	correction_number: z.number(),
	duration: z.number(),
	manual_subscription: z.boolean(),
	languages: z.array(
		z.looseObject({
			id: z.number(),
			name: z.string(),
			identifier: z.string(),
			created_at: z.coerce.date(),
			updated_at: z.coerce.date(),
		}),
	),
	flags: z.array(innerFlag),
	free: z.boolean().nullable(),
	sections: z.array(
		z.looseObject({
			id: z.number(),
			name: z.string(),
			description: z.string(),
			questions: z.array(
				z.looseObject({
					id: z.number(),
					name: z.string(),
					guidelines: z.string(),
					rating: z.string(),
					kind: z.string(),
					questions_skills: z.array(
						z.looseObject({
							id: z.number(),
							question_id: z.number(),
							skill_id: z.number(),
							percentage: z.number(),
							created_at: z.coerce.date(),
							updated_at: z.coerce.date(),
						}),
					),
					position: z.number().nullable(),
					created_at: z.coerce.date(),
					updated_at: z.coerce.date(),
				}),
			),
		}),
	),
	evaluation: z
		.looseObject({
			id: z.number(),
			kind: z.string(),
		})
		.nullable(),
});

export type IntraScale = z.infer<typeof intraScaleSchema>;
