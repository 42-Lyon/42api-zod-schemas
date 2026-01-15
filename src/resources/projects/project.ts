import z from "zod";
import { innerCampus } from "../campus/lib/inner.js";

const intraProjectSessionSchema = z.looseObject({
	id: z.number(),
	solo: z.boolean().nullable(),
	begin_at: z.coerce.date(),
	end_at: z.coerce.date().nullable(),
	estimate_time: z.string().nullable(),
	difficulty: z.number().nullable(),
	objectives: z.array(z.string()).nullable(),
	description: z.string().nullable(),
	duration_days: z.number().nullable(),
	terminating_after: z.number().nullable(),
	project_id: z.number(),
	campus_id: z.number().nullable(),
	cursus_id: z.number().nullable(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	max_people: z.number().nullable(),
	is_subscriptable: z.boolean().nullable(),
	scales: z.array(
		z.looseObject({
			id: z.number(),
			correction_number: z.number(),
			is_primary: z.boolean(),
		})
	),
	uploads: z.array(
		z.looseObject({
			id: z.number(),
			name: z.string(),
		})
	),
	team_behaviour: z.string(),
	commit: z.string().nullable(),
	minimum_mark: z.number(),
});

export const intraProjectSchema = z.looseObject({
	id: z.number(),
	name: z.string(),
	slug: z.string(),
	difficulty: z.number().nullable(),
	parent: z.looseObject({
		id: z.number(),
		name: z.string(),
		slug: z.string(),
		url: z.httpUrl(),
	}).nullable(),
	children: z.array(
		z.looseObject({
			id: z.number(),
			name: z.string(),
			slug: z.string(),
			url: z.httpUrl(),
		})
	),
	attachments: z.array(z.unknown()),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	exam: z.boolean(),
	git_id: z.number().nullable(),
	repository: z.string().nullable(),
	cursus: z.array(
		z.looseObject({
			id: z.number(),
			created_at: z.coerce.date(),
			name: z.string(),
			slug: z.string(),
			kind: z.string(),
		})
	),
	campus: z.array(innerCampus),
	videos: z.array(z.unknown()),
	project_sessions: z.array(intraProjectSessionSchema),
});

export type IntraProject = z.infer<typeof intraProjectSchema>;
