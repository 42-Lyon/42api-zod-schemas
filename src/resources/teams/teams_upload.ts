import z from "zod";
import { teamUploadBase } from "./lib/teamUploadBase.js";

export const intraTeamsUploadSchema = teamUploadBase.extend({
	upload: z.looseObject({
		id: z.number(),
		evaluation_id: z.number(),
		name: z.string(),
		description: z.string(),
		created_at: z.coerce.date(),
		updated_at: z.coerce.date(),
	}),
});

export type IntraTeamsUpload = z.infer<typeof intraTeamsUploadSchema>;
