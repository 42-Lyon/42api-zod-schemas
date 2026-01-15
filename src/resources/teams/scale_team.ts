import z from "zod";
import { intraTeamBaseSchema } from "./team.js";
import { microUser } from "../users/lib/micro.js";
import { questionWithAnswer } from "./lib/questionsWithAnswers.js";
import { innerFlag } from "../flags/lib/inner.js";

const scaleTeamScaleSchema = z.looseObject({
	id: z.number(),
	evaluation_id: z.number(),
	name: z.string(),
	is_primary: z.boolean(),
	comment: z.string(),
	introduction_md: z.string(),
	disclaimer_md: z.string(),
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
		})
	),
	flags: z.array(innerFlag),
	free: z.boolean().nullable(),
});

export const scaleTeamSchema = z.looseObject({
	id: z.number(),
	scale_id: z.number(),
	comment: z.string(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	feedback: z.string().nullable(),
	final_mark: z.number().nullable(),
	flag: innerFlag.nullable(),
	begin_at: z.string().nullable(),
	correcteds: z.array(microUser),
	corrector: microUser.partial(),
	truant: microUser.partial(),
	filled_at: z.string().nullable(),
	questions_with_answers: z.array(questionWithAnswer),
	scale: scaleTeamScaleSchema,
	team: intraTeamBaseSchema,
	feedbacks: z.array(
		z.looseObject({
			id: z.number(),
			user: z.looseObject({
				login: z.string(),
				id: z.number(),
				url: z.string(),
			}),
			feedbackable_type: z.string(),
			feedbackable_id: z.number(),
			comment: z.string(),
			rating: z.number(),
			created_at: z.coerce.date(),
		})
	),
});

export default scaleTeamSchema;
export type ScaleTeam = z.infer<typeof scaleTeamSchema>;
