# @jdp-dev/tsconfig [![GitHub Build Status][shield-github-build-status]][shield-github-build-status] [![npm][shield-npm]][npm] [![MIT License][shield-license]][license]

My shareable [TypeScript](https://www.typescriptlang.org/)
[config](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

## Installation

```shell script
npm install --save-dev @jdp-dev/tsconfig
```

or

```shell script
yarn add --dev @jdp-dev/tsconfig
```

## Usage

Reference it in your `tsconfig.json`.

TypeScript projects:

<!-- prettier-ignore -->
```json
{
  "extends": "@jdp-dev/tsconfig"
}
```

TypeScript + React projects for development:

<!-- prettier-ignore -->
```json
{
  "extends": "@jdp-dev/tsconfig/tsconfig.react.dev.json"
}
```

TypeScript + React projects for production:

<!-- prettier-ignore -->
```json
{
  "extends": "@jdp-dev/tsconfig/tsconfig.react.json"
}
```

## License

[MIT][license] &copy; [John Darryl Pelingo][me]

[license]: ../../LICENSE
[me]: https://johndpelingo.com/
[npm]: https://npmjs.org/package/@jdp-dev/tsconfig
[shield-github-build-status]:
  https://github.com/john-d-pelingo/jdp-scripts/workflows/npm-publish/badge.svg
[shield-license]: https://img.shields.io/badge/License-MIT-lavender.svg
[shield-npm]: https://img.shields.io/npm/v/@jdp-dev/tsconfig.svg
