module.exports = {
    root: true,
    extends: ['custom/common'],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.eslint.json'],
    },
    ignorePatterns: ['./src/templates/dockerfile-compiled.template.ts', '.turbo'],
    rules: {
        'import/no-default-export': 'warn',
        'import/no-named-as-default': 'warn',
        // чтобы могли использовать for и генераторы
        'no-restricted-syntax': 'off',
        // проект - cli-тулза, и она должна писать в консоль
        'no-console': 'off',
    },
};
