import z from "zod";
import { intraInnerCampusSchema } from "../campus/inner.js";

export const intraQuestBaseSchema = z.looseObject({
	id: z.number(),
	name: z.string(),
	slug: z.string(),
	kind: z.string(),
	internal_name: z.string().nullable(),
	description: z.string(),
	cursus_id: z.number(),
	campus_id: z.number().nullable(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	grade_id: z.number().nullable(),
	position: z.number(),
	guild_size: z.unknown().optional(),
	guild_prct: z.unknown().optional(),
	mails: z.array(z.never()).optional(),
	duration: z.unknown().optional(),
	ancestry: z.string().nullable().optional(),
});

export const intraQuestSchema = intraQuestBaseSchema.extend({
	grade: z.looseObject({
		id: z.number(),
		name: z.string(),
		created_at: z.coerce.date(),
		updated_at: z.coerce.date(),
		cursus_id: z.number(),
		is_primary: z.boolean().nullable(),
		position: z.number(),
		description: z.string(),
	}).nullable(),
	cursus: z.object({
		id: z.number(),
		created_at: z.coerce.date(),
		name: z.string(),
		slug: z.string(),
		kind: z.string(),
	}),
	campus: intraInnerCampusSchema.nullable(),
});

export type IntraQuest = z.infer<typeof intraQuestSchema>;
