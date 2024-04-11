import { defineConfig } from 'tsup'
import { resolve } from 'path'
import { execSync } from 'child_process'

export default defineConfig({
    outDir: 'build',
    entry: {
        index: resolve(__dirname, 'src/index.ts'),
    },
    globalName: 'common',
    format: ['cjs', 'esm'],
    external: [],
    dts: true,
    async onSuccess() {
        execSync('tsc', {
            cwd: resolve(__dirname, 'build')
        })
    }
})