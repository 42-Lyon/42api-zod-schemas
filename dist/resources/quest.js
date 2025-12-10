import z from "zod";
export const intraQuestSchema = z.object({
    id: z.number(),
    name: z.string(),
});
/******************************************************************************/
export const intraQuestsUserSchema = z.object({
    id: z.number(),
    quest_id: z.number(),
    user: z.object({
        id: z.number(),
        login: z.string(),
    })
});
//# sourceMappingURL=quest.js.map