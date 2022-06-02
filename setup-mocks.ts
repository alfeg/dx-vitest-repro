import { afterAll, beforeAll, vi } from "vitest"

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
