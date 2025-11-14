module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [2, 'always', 200],
    'footer-max-line-length': [2, 'always', 200],
    'body-leading-blank': [2, 'always'],
    'subject-case': [2, 'always', 'sentence-case'],
  },
};
