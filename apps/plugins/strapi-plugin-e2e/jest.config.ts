/* eslint-disable */
export default {
  displayName: 'plugins-strapi-plugin-e2e',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/apps/plugins/strapi-plugin-e2e',
};
