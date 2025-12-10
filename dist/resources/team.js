import z from "zod";
export const intraTeamSchema = z.object({
    id: z.number(),
    name: z.string(),
    status: z.string(),
});
/******************************************************************************/
export const intraTeamsUserSchema = z.object({
    id: z.number(),
    team_id: z.number(),
    user_id: z.number(),
    validated: z.boolean(),
    leader: z.boolean(),
});
//# sourceMappingURL=team.js.map