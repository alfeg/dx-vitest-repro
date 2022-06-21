import { describe, it, vi } from "vitest";


vi.mock("devextreme/core/utils/type", async ()=> {
    const actualModule = await vi.importActual("devextreme/esm/core/utils/type") as any;
    
    const isPlainObject = vi.fn((object)=>{
        console.log("isPlainObject mocked");
        if (!object || "[object Object]" !== Object.prototype.toString.call(object)) {
            return false
        }
        var proto = Object.getPrototypeOf(object);
        var ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return "function" === typeof ctor && Object.toString.call(ctor) === Object.toString.call(Object)
    })
    return {__esModule: true, ...actualModule, isPlainObject}
})

import Hello from "./Hello.vue"
import { mount } from "@vue/test-utils"

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

    
})
