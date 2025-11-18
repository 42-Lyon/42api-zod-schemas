# 42API-zod-schemas

This package centralises Zod schemas for common 42 API resources so downstream projects can parse, validate and type responses safely.

## Features

- Zod schemas for several 42 API resources (users, projects, events, campuses, achievements, and more)
- TypeScript types inferred from the Zod schemas
- ESM-friendly exports (import only what you need)

## Installation


```bash
# Navigate to your project
cd <my-awsome-project>

# clone this repository:
git clone git@github.com:42-Lyon/42API-zod-schemas.git
# or add it as a submodule
git submodule add git@github.com:42-Lyon/42API-zod-schemas.git

# Install the module as a local package
npm install ./42API-zod-schemas
```

This package is distributed as an ESM package and ships TypeScript types in `dist`.

## Quick usage

Import a schema and parse/validate API responses. The package exports individual resource schemas from `src/resources`.

Example (ESM / TypeScript):

```ts
import { intraUserSchema } from '42api-zod-schemas';

// Validate a response body
const response = await fetch('https://api.intra.42.fr/v2/users/cameo');
const data = await response.json();

// Throws if validation fails
const user = intraUserSchema.parse(data);

// Or use safe parsing
const result = intraUserSchema.safeParse(data);
if (!result.success) {
	console.error('Invalid user response', result.error);
} else {
	// Typed as the inferred type below
	const typedUser = result.data;
}

```

For each schema, a related type is also available
```ts
import { intraUserSchema, type IntraUser } from '42api-zod-schemas';

const user: IntraUser = {
	...
}

```

## Exported schemas

The package re-exports schemas from `src/resources`. As of this release it includes (but may not be limited to):

- `achievement`
- `bloc`
- `campus`
- `close`
- `events`
- `pool`
- `project`
- `quest`
- `user`

## Build

This package is authored in TypeScript. Build with:

```bash
npm run build
```

That runs `tsc` and emits `dist` (see `package.json` `main`/`types` fields).

## Contributing

Contributions welcome. Suggested workflow:

1. Fork the repo and create a feature branch.
2. Add or update schemas under `src/resources`.
3. Run `npm run build` to ensure types build correctly.
4. Open a PR describing your changes.

When adding schemas, follow the existing pattern: export a Zod schema and an inferred TypeScript type.

## Links

- Repository: https://github.com/42-Lyon/42API-zod-schemas
- Issues: https://github.com/42-Lyon/42API-zod-schemas/issues
