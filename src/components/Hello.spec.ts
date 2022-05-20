import Hello from './Hello.vue'
import { mount } from "@vue/test-utils"

describe("Hello", () => {
    it("should work", () => {
        const wrapper = mount(Hello, {
            props: {
                name: 'Hello'
            },
        })
    
        const main  = wrapper.get('#main')
        expect(main.text()).toBe('Hello Hello')
    })
})