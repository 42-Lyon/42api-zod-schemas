import z from "zod";

export const teamBase = z.looseObject({
	id: z.number(),
	name: z.string(),
	url: z.string(),
	final_mark: z.number().nullable(),
	project_id: z.number(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	status: z.string(),
	terminating_at: z.coerce.date().nullable(),
	users: z.array(
		z.looseObject({
			id: z.number(),
			login: z.string(),
			url: z.string(),
			leader: z.boolean(),
			occurrence: z.number(),
			validated: z.boolean(),
			projects_user_id: z.number().nullable(),
		})
	),
	"locked?": z.boolean().nullable(),
	"validated?": z.boolean().nullable(),
	"closed?": z.boolean().nullable(),
	repo_url: z.string().nullable(),
	repo_uuid: z.string(),
	locked_at: z.coerce.date().nullable(),
	closed_at: z.coerce.date().nullable(),
	project_session_id: z.number(),
	project_gitlab_path: z.string().nullable(),
});
