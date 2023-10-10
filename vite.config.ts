import { UserConfig } from "vitest/config"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { viteCommonjs } from "@originjs/vite-plugin-commonjs"
// https://vitejs.dev/config/
//@ts-ignore
export default defineConfig((context) => {
    const config: UserConfig = {
        test: {
            globals: true,
            environment: "jsdom",
            setupFiles: ["setup-mocks.ts"],
            include: ["**/*.spec *.ts", "**/*.spec.ts"],
            environmentOptions: {
                jsdom: {
                    pretendToBeVisual: true,
                    includeNodeLocations: true,
                    runScripts: "dangerously",
                },
            },
            deps: {
                inline: ["devextreme"],
            },
            //  clearMocks: true,
        },
        //@ts-ignore
        plugins: [vue(), viteCommonjs(["devextreme"])],

        define: {
            // adding app version
            __APP_VERSION__: process.env.APP_VERSION,
        },

        esbuild: {
            pure: ["console.log", "console.debug"],
        },

        resolve: {
            mainFields: ["module"],
            alias: {
                //"devextreme/ui": "devextreme/esm/ui",
                "@/": "/src/",
            },
        },
    }

    if (context.command == "serve") {
        // fix for warning: You are running production build of Inferno in development mode.
        if (config?.resolve?.alias) config.resolve.alias["inferno"] = "inferno/dist/index.dev.esm.js"
    }

    return config
})
