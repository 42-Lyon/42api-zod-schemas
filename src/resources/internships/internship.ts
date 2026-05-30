import { z } from "zod";
import { intraUserSchema } from "../users/users.js";

const stateSchema = z.enum(["generated", "invalidated", "need_validation", "uploaded"]);

export const intraInternshipSchema = z.looseObject({
	id: z.number(),
	administration_id: z.number(),
	offer_id: z.number().nullable(),
	language_id: z.number(),
	state: stateSchema,
	days: z.string(),
	user_address: z.string(),
	user_postal: z.string(),
	user_city: z.string(),
	user_country: z.string(),
	company_name: z.string(),
	company_boss_user_first_name: z.string(),
	company_boss_user_last_name: z.string(),
	company_boss_user_email: z.string(),
	company_boss_user_phone: z.string(),
	company_user_first_name: z.string(),
	company_user_last_name: z.string(),
	company_user_post: z.string(),
	company_user_email: z.string(),
	company_user_phone: z.string(),
	company_address: z.string(),
	company_postal: z.string(),
	company_city: z.string(),
	company_country: z.string(),
	company_siret: z.string(),
	internship_address: z.string(),
	internship_postal: z.string(),
	internship_city: z.string(),
	internship_country: z.string(),
	contract_type: z.string(),
	subject: z.string(),
	start_at: z.coerce.date(),
	end_at: z.coerce.date(),
	duration: z.number(),
	nb_days: z.number(),
	nb_hours: z.number(),
	movement: z.string().nullable(),
	salary: z.number(),
	currency: z.string(),
	breach_at: z.coerce.date().nullable(),
	convention: z.looseObject({
		convention: z.looseObject({
			url: z.string().nullable(),
		}),
	}),
	convention_uri: z.httpUrl().nullable(),
	user: intraUserSchema,
	projects_user: z.number().nullable(),
});

export type IntraInternship = z.infer<typeof intraInternshipSchema>;
export type IntraInternshipState = z.infer<typeof stateSchema>;
