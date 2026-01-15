import z from "zod"

export const questionWithAnswer = z.looseObject({
	id: z.number(),
	name: z.string(),
	guidelines: z.string(),
	rating: z.string(),
	kind: z.string(),
	position: z.number().nullable(),
	answers: z.array(
		z.looseObject({
			id: z.number(),
			value: z.number().nullable(),
			answer: z.string().nullable(),
		})
	),
});
