import z from "zod";

export const intraTeamsUploadsBaseSchema = z.looseObject({
	id: z.number(),
	final_mark: z.number().nullable(),
	comment: z.string(),
	created_at: z.coerce.date(),
	upload_id: z.number(),
});

export const intraTeamsUploadsSchema = intraTeamsUploadsBaseSchema.extend({
	upload: z.looseObject({
		id: z.number(),
		evaluation_id: z.number(),
		name: z.string(),
		description: z.string(),
		created_at: z.coerce.date(),
		updated_at: z.coerce.date(),
	}),
});

export type IntraTeamsUploads = z.infer<typeof intraTeamsUploadsSchema>;
