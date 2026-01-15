import z from "zod";

export const intraCampusSchema = z.looseObject({
	id: z.number(),
	name: z.string(),
	time_zone: z.string(),
	language: z.looseObject({
		id: z.number(),
		name: z.string(),
		identifier: z.string(),
	}),
	users_count: z.number(),
	vogsphere_id: z.number().nullable(),
	country: z.string(),
	address: z.string(),
	zip: z.string(),
	city: z.string(),
	website: z.string(),
	facebook: z.string(),
	twitter: z.string(),
	active: z.boolean(),
	public: z.boolean(),
	email_extension: z.string().nullable(),
	default_hidden_phone: z.boolean(),
	endpoint: z.looseObject({
		id: z.number(),
		url: z.string(),
		description: z.string(),
		created_at: z.coerce.date(),
		updated_at: z.coerce.date(),
	}).nullable(),
});

export type IntraCampus = z.infer<typeof intraCampusSchema>;
