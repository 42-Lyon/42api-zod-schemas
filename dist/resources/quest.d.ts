import z from "zod";
export declare const intraQuestSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
}, z.z.core.$strip>;
export type intraQuest = z.infer<typeof intraQuestSchema>;
/******************************************************************************/
export declare const intraQuestsUserSchema: z.ZodObject<{
    id: z.ZodNumber;
    quest_id: z.ZodNumber;
    user: z.ZodObject<{
        id: z.ZodNumber;
        login: z.ZodString;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export type intraQuestsUser = z.infer<typeof intraQuestsUserSchema>;
//# sourceMappingURL=quest.d.ts.map