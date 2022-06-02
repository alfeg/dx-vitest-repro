# Issue repro for Dx integration with Vitest

This is minimal repro for the problem of using Vitest to test Dx components.
We are not sure who

## Configuration


Jest and Vitest will run both same file - `Hello.spec.ts`

Jest and Vitest configured to use `jsdom` environment.

To run tests with Vest
```
npm run jest
```

To run tests with Vitest
```
npm run vitest
```

# Expected

Both test frameworks pass tests

# Actual

Vitest tests are failed with error

```
node:internal/event_target:912
  process.nextTick(() => { throw err; });
                           ^
TypeError [Error]: window.getComputedStyle is not a function
    at readThemeMarker (C:\src\exp\devextreme-vitest\node_modules\devextreme\cjs\ui\themes.js:71:25)
    at isPendingThemeLoaded (C:\src\exp\devextreme-vitest\node_modules\devextreme\cjs\ui\themes.js:131:23)
    at Timeout._onTimeout (C:\src\exp\devextreme-vitest\node_modules\devextreme\cjs\ui\themes.js:111:28)
    at listOnTimeout (node:internal/timers:559:17)
    at processTimers (node:internal/timers:502:7)
Emitted 'error' event on Tinypool instance at:
    at EventEmitterReferencingAsyncResource.runInAsyncScope (node:async_hooks:202:9)
    at Tinypool.emit (file:///C:/src/exp/devextreme-vitest/node_modules/tinypool/dist/esm/index.js:59:31)
    at Worker.<anonymous> (file:///C:/src/exp/devextreme-vitest/node_modules/tinypool/dist/esm/index.js:543:30)
    at Worker.emit (node:events:527:28)
    at Worker.[kOnErrorMessage] (node:internal/worker:289:10)
    at Worker.[kOnMessage] (node:internal/worker:300:37)
    at MessagePort.<anonymous> (node:internal/worker:201:57)
    at MessagePort.[nodejs.internal.kHybridDispatch] (node:internal/event_target:643:20)
    at MessagePort.exports.emitMessage (node:internal/per_context/messageport:23:28)
```