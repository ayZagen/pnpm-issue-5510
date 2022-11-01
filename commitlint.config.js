/* eslint-env node */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            'build',
            'dev',
            'docs',
            'feat',
            'fix',
            'refactor',
            'revert',
            'style',
            'test',
            'type',
        ]
    }
};
