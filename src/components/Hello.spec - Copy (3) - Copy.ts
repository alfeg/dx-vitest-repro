import Hello from "./Hello.vue"
import { mount } from "@vue/test-utils"
import { describe, it } from "vitest"

describe.concurrent("Hello", () => {
    it.concurrent("should work 1", async () => {
        const wrapper = mount(Hello, {
            props: {
                name: "Hello",
            },
        })

        const main = wrapper.get("#main")
        expect(main.text()).toBe("Hello Hello")
        await main.trigger("click")
    })

    it.concurrent("should work 2", async () => {
        const wrapper = mount(Hello, {
            props: {
                name: "Hello",
            },
        })

        const main = wrapper.get("#main")
        expect(main.text()).toBe("Hello Hello")
        await main.trigger("click")
    })

    it.concurrent("should work 3", async () => {
        const wrapper = mount(Hello, {
            props: {
                name: "Hello",
            },
        })

        const main = wrapper.get("#main")
        expect(main.text()).toBe("Hello Hello")
        await main.trigger("click")
    })

    it.concurrent("should work 4", async () => {
        const wrapper = mount(Hello, {
            props: {
                name: "Hello",
            },
        })

        const main = wrapper.get("#main")
        expect(main.text()).toBe("Hello Hello")
        await main.trigger("click")
    })

    it.concurrent("should work 5", async () => {
        const wrapper = mount(Hello, {
            props: {
                name: "Hello",
            },
        })

        const main = wrapper.get("#main")
        expect(main.text()).toBe("Hello Hello")
        await main.trigger("click")
    })

    it.concurrent("should work 6", async () => {
        const wrapper = mount(Hello, {
            props: {
                name: "Hello",
            },
        })

        const main = wrapper.get("#main")
        expect(main.text()).toBe("Hello Hello")
        await main.trigger("click")
    })

    it.concurrent("should work 7", async () => {
        const wrapper = mount(Hello, {
            props: {
                name: "Hello",
            },
        })

        const main = wrapper.get("#main")
        expect(main.text()).toBe("Hello Hello")
        await main.trigger("click")
    })

    it.concurrent("should work 8", async () => {
        const wrapper = mount(Hello, {
            props: {
                name: "Hello",
            },
        })

        const main = wrapper.get("#main")
        expect(main.text()).toBe("Hello Hello")
        await main.trigger("click")
    })

    it.concurrent("should work 81", async () => {
        const wrapper = mount(Hello, {
            props: {
                name: "Hello",
            },
        })

        const main = wrapper.get("#main")
        expect(main.text()).toBe("Hello Hello")
        await main.trigger("click")
    })

    it.concurrent("should work 82", async () => {
        const wrapper = mount(Hello, {
            props: {
                name: "Hello",
            },
        })

        const main = wrapper.get("#main")
        expect(main.text()).toBe("Hello Hello")
        await main.trigger("click")
    })

    it.concurrent("should work 83", async () => {
        const wrapper = mount(Hello, {
            props: {
                name: "Hello",
            },
        })

        const main = wrapper.get("#main")
        expect(main.text()).toBe("Hello Hello")
        await main.trigger("click")
    })

    it.concurrent("should work 84", async () => {
        const wrapper = mount(Hello, {
            props: {
                name: "Hello",
            },
        })

        const main = wrapper.get("#main")
        expect(main.text()).toBe("Hello Hello")
        await main.trigger("click")
    })

    it.concurrent("should work 85", async () => {
        const wrapper = mount(Hello, {
            props: {
                name: "Hello",
            },
        })

        const main = wrapper.get("#main")
        expect(main.text()).toBe("Hello Hello")
        await main.trigger("click")
    })

    it.concurrent("should work 86", async () => {
        const wrapper = mount(Hello, {
            props: {
                name: "Hello",
            },
        })

        const main = wrapper.get("#main")
        expect(main.text()).toBe("Hello Hello")
        await main.trigger("click")
    })

    it.concurrent("should work 87", async () => {
        const wrapper = mount(Hello, {
            props: {
                name: "Hello",
            },
        })

        const main = wrapper.get("#main")
        expect(main.text()).toBe("Hello Hello")
        await main.trigger("click")
    })
})
