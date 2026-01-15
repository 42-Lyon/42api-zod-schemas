import z from "zod";
import { microUser } from "../users/lib/micro.js";
import { questionWithAnswer } from "./lib/questionsWithAnswers.js";
import { innerFlag } from "../flags/lib/inner.js";
import { teamBase } from "./lib/teamBase.js";
import { teamUploadBase } from "./lib/teamUploadBase.js";

export const intraTeamSchema = teamBase.extend({
	scale_teams: z.array(
		z.looseObject({
			id: z.number(),
			scale_id: z.number(),
			comment: z.string().nullable(),
			created_at: z.coerce.date(),
			updated_at: z.coerce.date(),
			feedback: z.string().nullable(),
			final_mark: z.number().nullable(),
			flag: innerFlag,
			begin_at: z.coerce.date(),
			correcteds: z.array(microUser),
			corrector: microUser.partial(),
			truant: microUser.partial(),
			filled_at: z.coerce.date(),
			questions_with_answers: z.array(questionWithAnswer)
		})),
	teams_uploads: z.array(teamUploadBase),
});

export type IntraTeam = z.infer<typeof intraTeamSchema>;
