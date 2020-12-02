# @jdp-dev/commitlint-config [![GitHub Build Status][shield-github-build-status]][shield-github-build-status] [![npm][shield-npm]][npm] [![MIT License][shield-license]][license]

My shareable [commitlint](https://commitlint.js.org/)
[config](https://commitlint.js.org/#/reference-configuration).

## Installation

```shell script
npm install --save-dev @jdp-dev/commitlint-config
```

or

```shell script
yarn add --dev @jdp-dev/commitlint-config
```

## Usage

Add `@jdp-dev/commitlint-config` to the `"extends"` array in your `.commitlintrc.*`
file.

<!-- prettier-ignore -->
```javascript
module.exports = {
  extends: ['@jdp-dev/commitlint-config']
}
```

Or, you can use it in other ways as described in the
[official documentation](https://commitlint.js.org/#/reference-configuration?id=shareable-configuration).

## License

[MIT][license] &copy; [John Darryl Pelingo][me]

[license]: ../../LICENSE
[me]: https://johndpelingo.com/
[npm]: https://npmjs.org/package/@jdp-dev/commitlint-config
[shield-github-build-status]:
  https://github.com/john-d-pelingo/jdp-scripts/workflows/npm-publish/badge.svg
[shield-license]: https://img.shields.io/badge/License-MIT-lavender.svg
[shield-npm]: https://img.shields.io/npm/v/@jdp-dev/commitlint-config.svg
