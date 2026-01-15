import { z } from "zod";
import { intraUserSchema } from "../users/users.js";

export const intraProjectsUserStatusSchema = z.enum([
	"creating_group",
	"finished",
	"in_progress",
	"parent",
	"searching_a_group",
	"waiting_for_correction",
]);

const intraProjectsUserProjectSchema = z
	.looseObject({
		id: z.number(),
		name: z.string(),
		slug: z.string(),
		parent_id: z.number().nullable(),
	});

const intraProjectsUserTeamMemberSchema = z
	.looseObject({
		id: z.number(),
		login: z.string(),
		url: z.httpUrl(),
		leader: z.boolean(),
		occurrence: z.number(),
		validated: z.boolean(),
		projects_user_id: z.number(),
	});

const intraProjectsUserTeamSchema = z
	.looseObject({
		id: z.number(),
		name: z.string(),
		url: z.httpUrl(),
		final_mark: z.number().nullable(),
		project_id: z.number(),
		created_at: z.coerce.date(),
		updated_at: z.coerce.date(),
		status: intraProjectsUserStatusSchema,
		terminating_at: z.coerce.date().nullable(),
		users: z.array(intraProjectsUserTeamMemberSchema),
		"locked?": z.boolean(),
		"validated?": z.boolean().nullable(),
		"closed?": z.boolean(),
		repo_url: z.string().nullable(),
		repo_uuid: z.string(),
		locked_at: z.coerce.date().nullable(),
		closed_at: z.coerce.date().nullable(),
		project_session_id: z.number(),
		project_gitlab_path: z.string().nullable(),
	});

export const intraProjectsUserSchema = z
	.looseObject({
		id: z.number(),
		occurrence: z.number(),
		final_mark: z.number().nullable(),
		status: intraProjectsUserStatusSchema,
		"validated?": z.boolean().nullable(),
		current_team_id: z.number().nullable(),
		project: intraProjectsUserProjectSchema,
		cursus_ids: z.array(z.number()),
		user: intraUserSchema,
		teams: z.array(intraProjectsUserTeamSchema),
		marked_at: z.coerce.date().nullable(),
		marked: z.boolean(),
		retriable_at: z.coerce.date().nullable(),
		created_at: z.coerce.date(),
		updated_at: z.coerce.date(),
	});

export type IntraProjectsUser = z.infer<typeof intraProjectsUserSchema>;
