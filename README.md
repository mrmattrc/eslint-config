[![npm version](https://badge.fury.io/js/@mattcampbell%2Feslint-config.svg)](https://badge.fury.io/js/@mattcampbell%2Feslint-config)

# eslint-config

A highly opinionated ESLint config. This config is designed to provide consistent behavior, enforce best practices, and minimize potential issues and errors. Because it is so opinionated, there will likely be a lot of errors when adding to an existing project. I recommend running the lint script to see what issues it finds and trying to fix as many of the issues as possible. However, there will definitely be cases where it is not worth the time or effort to fix various issues. When that happens, you can override any rule by adding it to your `.eslintrc` config.

## Getting started

Install `eslint @mattcampbell/eslint-config` (and `eslint-config-next` if using Next.js).

```bash
npm i -D eslint eslint-config-next @mattcampbell/eslint-config
```

Then create a `.eslintrc` file in the root of your project with

```json
{
    "extends": ["@mattcampbell/eslint-config/next"],
}
```
If you receive this error:
> "`Parsing error: Cannot read file '/users/mattcampbell/sites/skills-genome-project/tsconfig.json'.`"

You will need to specify the tsconfig.json in the `.eslintrc` file.

```json
{
    "parserOptions": {
      "project": ["./tsconfig.json"]
    }
}
```

### Running the linter

Add these scripts to your `package.json` file:

```json
"scripts": {
    "check-types": "tsc --noEmit --pretty",
    "eslint": "TIMING=1 eslint \"**/*.{js,jsx,ts,tsx}\" --quiet",
    "lint": "npm run eslint && npm run check-types",
    "lint:fix": "npm run eslint --fix && npm run check-types && npm run prettier",
    "prettier": "prettier --write ."
},
```

Then run `npm run lint` or run `npm run lint:fix` to fix all fixable issues.

### Versions

-   **CLI**: use `@mattcampbell/eslint-config/cli`
-   **Cypress**: use `@mattcampbell/eslint-config/cypress`
-   **Firebase Functions**: use `@mattcampbell/eslint-config/firebase-functions`
-   **Jest**: use `@mattcampbell/eslint-config/jest`
-   **Next**: use `@mattcampbell/eslint-config/next`
-   **React**: use `@mattcampbell/eslint-config/react`
-   **Svelte**: use `@mattcampbell/eslint-config/svelte`

When using a more specific config, the base config is not needed. For instance, with Next.js, this is all that's required:

```json
{
    "extends": ["@mattcampbell/eslint-config/next"]
}
```

## Integration with VS Code (recommended)

This is the easiest way to ensure ESLint is run every time you save a file, and that VS Code lints as you type, pointing out errors in real-time.

1. Create a new file `.vscode/settings.json`
2. Add this to the file:

```json
{
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "eslint.run": "onType"
}
```

> **Note**: when you first open the repo with this ESLint configuration, it can take up to a minute for VS Code to start linting. You'll still be able to edit files in the meantime.

## Use with Prettier

This config has Prettier built-in. If you use Prettier with your code editor or use a `.prettierrc` file, there will likely be conflicts. It's best to remove any `.prettierrc` files you may have and disable Prettier in your code editor.

> **Rationale**: this ESLint config is highly opinionated and is a living config. As best practices evolve, this config will evolve. Since Prettier is 100% fixable, that means that your code will always follow this config and therefore always follow best practices. If you override the formatting with Prettier, you forgo any future updates in regard to Prettier formatting.

**Note**: If using the Svelte config, you need to setup Prettier manually. This is because the plugin `prettier-plugin-svelte` (which is needed to parse Svelte) [does not work with ESLint](https://github.com/sveltejs/prettier-plugin-svelte/issues/57).

## Use without TypeScript

Currently, all the configs require TypeScript. Vanilla JS is currently not supported.

## What rules are enabled?

In short, this config runs 500+ rules (and counting). Luckily, the source code is easy to read, so you should not have an issue reading the rules there.

## I found a bug, what do I do?

If you found a bug or rule conflicts, [submit an issue on GitHub](https://github.com/mrmattrc/eslint-config/issues).
