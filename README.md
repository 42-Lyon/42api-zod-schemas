# 42API-zod-schemas

This package centralises Zod schemas for common 42 API resources so downstream projects can parse, validate and type responses safely.

## Features

- Zod schemas for several 42 API resources (users, projects, events, campuses, achievements, and more)
- TypeScript types inferred from the Zod schemas
- ESM-friendly exports (import only what you need)

## Installation


```bash
npm install @42-lyon/42api-zod-schemas
# or
pnpm add @42-lyon/42api-zod-schemas
# or
yarn add @42-lyon/42api-zod-schemas
```

The package is ESM-only and ships bundled `.d.ts` definitions.

## Quick start

```ts
import { intraUserSchema, type IntraUser } from '@42-lyon/42api-zod-schemas';

const response = await fetch('https://api.intra.42.fr/v2/users/cameo');
const payload = await response.json();

// Throws on invalid payload
const user: IntraUser = intraUserSchema.parse(payload);

// Or keep control over the error path
const result = intraUserSchema.safeParse(payload);
if (!result.success) {
	console.error(result.error.format());
}
```

### Tree-shakeable imports

Schemas are exported individually so you can import only what you need:

```ts
import { projectSchema } from '@42-lyon/42api-zod-schemas/project';
```

## Available schemas

- achievements (`achievements` and `achievements_users`)
- bloc
- campus
- close
- events
- experiences
- pool
- project
- quest
- team
- transactions
- user

Each schema is exported alongside its inferred type (e.g. `intraUserSchema` and `IntraUser`).

## Links

- npm: https://www.npmjs.com/package/@42-lyon/42api-zod-schemas
- Repository: https://github.com/42-Lyon/42API-zod-schemas
- Issues: https://github.com/42-Lyon/42API-zod-schemas/issues
