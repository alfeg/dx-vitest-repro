import { afterAll, beforeAll, vi } from "vitest"

vi.mock("devextreme/core/utils/window", async () => {
    const actualModule = (await vi.importActual("devextreme/esm/core/utils/window")) as any
    // console.log("replace")
    return {
        __esModule: true,
        ...actualModule,
        getWindow: () => ({
            getComputedStyle: vi.fn(() => ({
                fontFamily: "dx.generic.light",
            })),
        }),
    }
})

vi.mock("devextreme/core/utils/position", async () => {
    const actualModule = (await vi.importActual("devextreme/esm/core/utils/position")) as any

    return {
        __esModule: true,
        ...actualModule,
        getBoundingRect: () => ({
            return: {
                width: 100,
                height: 100,
            },
        }),
    }
})
vi.mock("devextreme/core/utils/size", async () => {
    const actualModule = (await vi.importActual("devextreme/esm/core/utils/size")) as any

    return {
        __esModule: true,
        ...actualModule,
        getOffset: () => ({
            return: {
                top: 0,
                left: 0,
            },
        }),
    }
})
// beforeAll(() => {
//  vi.stubGlobal('getComputedStyle', () => ({
//     display: 'none',
//     appearance: ['-webkit-appearance'],
//   }))
// })
//  global.something = 'something'
// beforeAll(async () => {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(null)
//     }, 300)
//   })
// })

// beforeEach(async () => {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(null)
//     }, 10)
//   })
// })

// afterAll(() => {
//   // @ts-expect-error type
//   delete global.something
// })

// afterAll(async () => {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(null)
//     }, 500)
//   })
// })
