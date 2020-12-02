# @jdp-dev/eslint-config-typescript [![GitHub Build Status][shield-github-build-status]][shield-github-build-status] [![npm][shield-npm]][npm] [![MIT License][shield-license]][license]

My shareable [ESLint](https://eslint.org/)
[config](https://eslint.org/docs/user-guide/configuring) for
[TypeScript](https://www.typescriptlang.org/) projects.

## Install

Install `@jdp-dev/eslint-config-typescript`:

```shell script
npm install --save-dev @jdp-dev/eslint-config-typescript
```

or

```shell script
yarn add --dev @jdp-dev/eslint-config-typescript
```

Then, add `@jdp-dev/eslint-config-typescript` to the `"extends"` array in your
`.eslintrc.*` file.

<!-- prettier-ignore -->
```json
{
  "extends": [
    "some-other-config-you-use",
    "@jdp-dev/eslint-config-typescript"
  ]
}
```

## License

[MIT][license] &copy; [John Darryl Pelingo][me]

[license]: ../../LICENSE
[me]: https://johndpelingo.com/
[npm]: https://npmjs.org/package/@jdp-dev/eslint-config-typescript
[shield-github-build-status]:
  https://github.com/john-d-pelingo/jdp-scripts/workflows/npm-publish/badge.svg
[shield-license]: https://img.shields.io/badge/License-MIT-lavender.svg
[shield-npm]: https://img.shields.io/npm/v/@jdp-dev/eslint-config-typescript.svg
