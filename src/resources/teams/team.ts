import z from "zod";
import { intraTeamsUploadsBaseSchema } from "./teams_uploads.js";
import { microUser } from "../users/lib/micro.js";
import { questionWithAnswer } from "./lib/questionsWithAnswers.js";
import { innerFlag } from "../flags/lib/inner.js";

const intraTeamUserSchema = z.looseObject({
	id: z.number(),
	login: z.string(),
	url: z.string(),
	leader: z.boolean(),
	occurrence: z.number(),
	validated: z.boolean(),
	projects_user_id: z.number().nullable(),
});

export const intraTeamBaseSchema = z.looseObject({
	id: z.number(),
	name: z.string(),
	url: z.string(),
	final_mark: z.number().nullable(),
	project_id: z.number(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	status: z.string(),
	terminating_at: z.coerce.date().nullable(),
	users: z.array(intraTeamUserSchema),
	"locked?": z.boolean().nullable(),
	"validated?": z.boolean().nullable(),
	"closed?": z.boolean().nullable(),
	repo_url: z.string().nullable(),
	repo_uuid: z.string(),
	locked_at: z.coerce.date().nullable(),
	closed_at: z.coerce.date().nullable(),
	project_session_id: z.number(),
	project_gitlab_path: z.string().nullable(),
});

export const intraTeamSchema = intraTeamBaseSchema.extend({
	scale_teams: z.array(
		z.looseObject({
			id: z.number(),
			scale_id: z.number(),
			comment: z.string().nullable(),
			created_at: z.coerce.date(),
			updated_at: z.coerce.date(),
			feedback: z.string().nullable(),
			final_mark: z.number().nullable(),
			flag: innerFlag.nullable(),
			begin_at: z.coerce.date(),
			correcteds: z.array(microUser),
			corrector: microUser.partial(),
			truant: microUser.partial(),
			filled_at: z.coerce.date(),
			questions_with_answers: z.array(questionWithAnswer)
		})),
	teams_uploads: z.array(intraTeamsUploadsBaseSchema),
});

export type IntraTeamBase = z.infer<typeof intraTeamBaseSchema>;
export type IntraTeam = z.infer<typeof intraTeamSchema>;
