# Issue repro for Dx integration with Vitest

This is minimal repro for the problem of using Vitest to test Dx components.

## Configuration

This repro installs both Jest and Vitest

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

Jest tests are passed

Vitest tests are failed with error

```
> dx-vitest@1.0.0 vitest
> vitest run


 RUN  v0.12.6 C:/src/exp/devextreme-vitest

 ❯ src/components/Hello.spec.ts (0)

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  src/components/Hello.spec.ts [ src/components/Hello.spec.ts ]
TypeError: The provided value is not of type 'Element'.
 ❯ Object.exports.convert node_modules/jsdom/lib/jsdom/living/generated/Element.js:26:9
 ❯ Proxy.Window.getComputedStyle node_modules/jsdom/lib/jsdom/browser/Window.js:783:19
 ❯ getElementComputedStyle node_modules/devextreme/cjs/core/utils/size.js:42:42
 ❯ getSize node_modules/devextreme/cjs/core/utils/size.js:70:18
 ❯ elementSize node_modules/devextreme/cjs/core/utils/size.js:337:16
 ❯ elementSizeHelper node_modules/devextreme/cjs/core/utils/size.js:253:37
 ❯ Object.getWidth node_modules/devextreme/cjs/core/utils/size.js:181:34
 ❯ getWidth node_modules/devextreme/cjs/core/utils/size.js:256:31
 ❯ Devices._proto._recalculateOrientation node_modules/devextreme/cjs/core/devices.js:273:46
 ❯ Object.add node_modules/devextreme/cjs/core/utils/ready_callbacks.js:32:13

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

Test Files  1 failed (1)
     Tests  no tests
      Time  1.66s (in thread 0ms, Infinity%)
```

If You comment out line 14 in `Hello.vue` file, then test will be passed. 
