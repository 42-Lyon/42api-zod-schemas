import z from "zod";

export const intraFlagSchema = z.looseObject({
	id: z.number(),
	name: z.string(),
});

export type IntraFlag = z.infer<typeof intraFlagSchema>;
