import z from "zod";

export const intraTeamSchema = z.object({
	id: z.number().int(),
	name: z.string(),
	status: z.string(),

});

export type intraTeam = z.infer<typeof intraTeamSchema>;


export const intraTeamsUserSchema = z.object({
	id: z.number().int(),
	team_id: z.number().int(),
	user_id: z.number().int(),
	validated: z.boolean(),
	leader: z.boolean(),
});

export type intraTeamsUser = z.infer<typeof intraTeamsUserSchema>;
