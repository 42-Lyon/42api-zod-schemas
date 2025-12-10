import z from "zod";
export declare const intraTeamSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    status: z.ZodString;
}, z.z.core.$strip>;
export type intraTeam = z.infer<typeof intraTeamSchema>;
/******************************************************************************/
export declare const intraTeamsUserSchema: z.ZodObject<{
    id: z.ZodNumber;
    team_id: z.ZodNumber;
    user_id: z.ZodNumber;
    validated: z.ZodBoolean;
    leader: z.ZodBoolean;
}, z.z.core.$strip>;
export type intraTeamsUser = z.infer<typeof intraTeamsUserSchema>;
//# sourceMappingURL=team.d.ts.map