import z from "zod";
import { intraUserSchema } from "../users/users.js";
import { intraQuestBaseSchema } from "./quest.js";

export const intraQuestsUserSchema = z.looseObject({
	id: z.number(),
	end_at: z.coerce.date().nullable(),
	quest_id: z.number(),
	validated_at: z.coerce.date().nullable(),
	prct: z.number().nullable(),
	advancement: z.string().nullable(),
	created_at: z.coerce.date(), 
	updated_at: z.coerce.date(),
	user: intraUserSchema,
	quest: intraQuestBaseSchema,
});

export type IntraQuestsUser = z.infer<typeof intraQuestsUserSchema>;
