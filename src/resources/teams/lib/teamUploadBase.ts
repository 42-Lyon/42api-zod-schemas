import z from "zod";

export const teamUploadBase = z.looseObject({
	id: z.number(),
	final_mark: z.number().nullable(),
	comment: z.string(),
	created_at: z.coerce.date(),
	upload_id: z.number(),
});
