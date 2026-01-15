import z from "zod";
import { teamBase } from "./lib/teamBase.js";
import { intraUserSchema } from "../users/users.js";

export const intraTeamsUserSchema = z.looseObject({
	id: z.number(),
	team_id: z.number(),
	user_id: z.number(),
	created_at: z.coerce.date(),
	validated: z.boolean(),
	leader: z.boolean(),
	occurrence: z.number(),
	team: teamBase,
	user: intraUserSchema,
});

export type IntraTeamsUser = z.infer<typeof intraTeamsUserSchema>;
