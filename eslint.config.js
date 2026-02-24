import htmlPlugin from 'eslint-plugin-html';

export default [
    {
        files: ['**/*.html'],
        plugins: {
            html: htmlPlugin
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'script',
            globals: {
                console: 'readonly',
                document: 'readonly',
                window: 'readonly',
                Date: 'readonly',
                setInterval: 'readonly'
            }
        },
        rules: {
            'semi': ['error', 'always'],
            'quotes': ['error', 'single', { avoidEscape: true }],
            'no-unused-vars': 'error',
            'no-undef': 'error',
            'indent': ['error', 4],
            'no-console': 'off'
        }
    }
];
