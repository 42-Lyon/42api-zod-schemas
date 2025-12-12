import z from "zod";

export const intraTransactionSchema = z.object({
	id: z.number(),
	value: z.number(),
	user_id: z.number(),
	transactable_id: z.number().nullable(),
	transactable_type: z.string(),
	reason: z.string(),
	user: z.object({
		id: z.number(),
		login: z.string(),
		url: z.string()
	}).strict(),
	options: z.array(z.object({
		id: z.number(),
		name: z.string(),
		created_at: z.coerce.date(),
		updated_at: z.coerce.date(),
		option_values: z.array(z.object({
			id: z.number(),
			value: z.string(),
			created_at: z.coerce.date(),
			updated_at: z.coerce.date()
		}).strict())
	}).strict()).nullable(),
}).strict();

export type IntraTransaction = z.infer<typeof intraTransactionSchema>;
