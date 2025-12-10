import z from "zod";
export declare const intraProjectSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    slug: z.ZodString;
    children: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        id: z.ZodNumber;
    }, z.z.core.$strip>>;
    project_sessions: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        description: z.ZodString;
        begin_at: z.ZodNullable<z.ZodString>;
        end_at: z.ZodNullable<z.ZodString>;
        campus_id: z.ZodNullable<z.ZodNumber>;
    }, z.z.core.$strip>>;
}, z.z.core.$strip>;
export type intraProject = z.infer<typeof intraProjectSchema>;
/******************************************************************************/
export declare const intraProjectsUserSchema: z.ZodObject<{
    id: z.ZodNumber;
    user: z.ZodObject<{
        id: z.ZodNumber;
        login: z.ZodString;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export type intraProjectsUser = z.infer<typeof intraProjectsUserSchema>;
//# sourceMappingURL=project.d.ts.map