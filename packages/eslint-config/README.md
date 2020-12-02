# @jdp-dev/eslint-config [![GitHub Build Status][shield-github-build-status]][shield-github-build-status] [![npm][shield-npm]][npm] [![MIT License][shield-license]][license]

My shareable [ESLint](https://eslint.org/) config for
[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) projects.

## Install

Install `@jdp-dev/eslint-config`:

```shell script
npm install --save-dev @jdp-dev/eslint-config
```

or

```shell script
yarn add --dev @jdp-dev/eslint-config
```

Then, add `@jdp-dev/eslint-config` to the `"extends"` array in your
`.eslintrc.*` file.

<!-- prettier-ignore -->
```json
{
  "extends": [
    "some-other-config-you-use",
    "@jdp-dev/eslint-config"
  ]
}
```

## License

[MIT][license] &copy; [John Darryl Pelingo][me]

[license]: ../../LICENSE
[me]: https://johndpelingo.com/
[npm]: https://npmjs.org/package/@jdp-dev/eslint-config
[shield-github-build-status]:
  https://github.com/john-d-pelingo/jdp-scripts/workflows/npm-publish/badge.svg
[shield-license]: https://img.shields.io/badge/License-MIT-lavender.svg
[shield-npm]: https://img.shields.io/npm/v/@jdp-dev/eslint-config.svg
