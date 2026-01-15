import z from "zod";

export const microUser = z.looseObject({
	id: z.number(),
	login: z.string(),
	url: z.string(),
});
