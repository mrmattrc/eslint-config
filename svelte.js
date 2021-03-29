module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
    },
    plugins: ['svelte3'],
    extends: [require.resolve('./lib/base')],
    rules: {},
    ignorePatterns: ['public/build/'],
    settings: {
        'svelte3/typescript': require('typescript'),
    },
    parserOptions: {
        extraFileExtensions: ['.svelte'],
    },
    overrides: [
        {
            files: ['*.svelte'],
            rules: {
                'import/first': 'off',
                'prettier/prettier': 'off',
                'import/no-mutable-exports': 'off',
            },
        },
        {
            files: ['$layout.svelte'],
            rules: {
                'unicorn/filename-case': 'off',
            },
        },
        {
            files: ['**/*.svelte'],
            processor: 'svelte3/svelte3',
        },
    ],
}