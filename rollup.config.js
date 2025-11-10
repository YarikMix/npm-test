// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import terser from '@rollup/plugin-terser';
import filesize from 'rollup-plugin-filesize';

export default {
    input: "./src/index.ts",
    plugins: [
        typescript(),
    ],
    output: [
        {
            file: 'dist/index.js',
            format: 'esm',
            sourcemap: true,
            plugins: [filesize()],
        },
        {
            file: 'dist/index.min.js',
            format: 'esm',
            sourcemap: true,
            plugins: [terser(), filesize()],
        },
    ],
};
