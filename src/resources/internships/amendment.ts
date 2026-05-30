import z from "zod";

const intraAmendmentKindSchema = z.enum(["breach", "prolongation", "shortening", "other"]);
const intraAmendmentOriginSchema = z.enum(["company", "student"]);

export const intraAmendmentSchema = z.looseObject({
	id: z.number(),
	internship_id: z.number(),
	kind: intraAmendmentKindSchema,
	old_end_at: z.coerce.date(),
	old_salary: z.number().nullable(),
	old_currency: z.string().nullable(),
	effective_date: z.coerce.date().nullable(),
	convention_url: z.httpUrl(),
	origin: intraAmendmentOriginSchema.nullable(),
	created_at: z.coerce.date(),
});

export type IntraAmendment = z.infer<typeof intraAmendmentSchema>;
export type IntraAmendmentKind = z.infer<typeof intraAmendmentKindSchema>;
export type IntraAmendmentOrigin = z.infer<typeof intraAmendmentOriginSchema>;
