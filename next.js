module.exports = {
	extends: [require.resolve('./react'), 'next/core-web-vitals'],
	overrides: [
		{
			files: ['*/pages/**', '*/components/**', '*/lib/**'],
			rules: {
				'jsx-a11y/anchor-is-valid': 'off',
			},
		},
		{
			files: ['*/pages/api/**'],
			rules: {
				'import/no-default-export': 'off',
			},
		},
	],
	ignorePatterns: ['**/next-env.d.ts'],
}
