import z from "zod";

export const intraQuestSchema = z.object({
	id: z.number(),
	name: z.string(),
});

export type intraQuest = z.infer<typeof intraQuestSchema>;

/******************************************************************************/

export const intraQuestsUserSchema = z.object({
	id: z.number(),
	quest_id: z.number(),
	user: z.object({
		id: z.number(),
		login: z.string(),
	})
})

export type intraQuestsUser = z.infer<typeof intraQuestsUserSchema>;
