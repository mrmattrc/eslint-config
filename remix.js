module.exports = {
	extends: [
		require.resolve('./react'),
		'@remix-run/eslint-config',
		'@remix-run/eslint-config/jest',
	],
	overrides: [
		{
			files: ['**/app/**', '**/lib/**'],
			rules: {
				'jsx-a11y/anchor-is-valid': 'off',
			},
		},
	],
	ignorePatterns: ['**/next-env.d.ts'],
}
