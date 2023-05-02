2.1.0 / 2023-05-02
=================
  * [New] add `auto` entrypoint
  * [Refactor] use `call-bind` instead of `function-bind`; update `es-abstract` usage
  * [Refactor] Renaming var per https://github.com/tc39/proposal-string-pad-left-right/issues/13#issuecomment-151676376
  * [Refactor] Update concatenation algorithm to prevent strings larger than the max length
  * [Refactor] Improve the `stringFiller` concatenation algorithm:
  * [Docs] use versionbadg.es instead of vb.teelaun.ch for version badges
  * [Deps] update `define-properties`, `es-abstract`, `function-bind`
  * [meta] update dev workflows
  * [Dev Deps] update `tape`, `eslint`, `@ljharb/eslint-config`

2.0.0 / 2015-09-25
=================
  * Implement the [es-shim API](es-shims/api).
  * [Tests] up to `io.js` `v3.3`, `node` `v4.1`
  * [Deps] update `es-abstract`
  * [Dev Deps] Update `tape`, `jscs`, `eslint`, `@ljharb/eslint-config`, `nsp`
  * [Refactor] Remove redundant `max` operation, per https://github.com/ljharb/proposal-string-pad-left-right/pull/2

1.0.0 / 2015-07-30
=================
  * v1.0.0
