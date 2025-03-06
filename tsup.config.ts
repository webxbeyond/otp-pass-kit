import {defineConfig } from 'tsup'
// -------------------------------
export default defineConfig ({
    format: ['cjs', 'esm'],
    entryPoints: ['src/index.ts'],
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
    minify: "terser",
    terserOptions : {
        mangle: {
            toplevel: true,

        },
        compress:{
            drop_console: true,
            drop_debugger: true,
        },
        output: {
            beautify: false,
            comments: false
        }
    }
})