
import ts from 'typescript'
import dts from 'rollup-plugin-dts'

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default [
    {
        input: 'index.ts',
        plugins: [
            resolve(), 
            commonjs(), 
            typescript({
                typescript: ts,
                tsconfig: './tsconfig.json'
            })
        ],
        output:{
            exports: 'named',
            dir: 'package',
            format: 'esm',
            preserveModules: true
        }
    },
    {
        input: 'index.ts',
        plugins: [
            resolve(), 
            commonjs(), 
            typescript({
                typescript: ts,
                tsconfig: './tsconfig.json'
            }),
            dts()
        ],
        output: {
            file: 'package/index.d.ts',
            format: 'es'
        }
    },
    {
        input: './domains/index.ts',
        plugins: [
            resolve(), 
            commonjs(), 
            typescript({
                typescript: ts,
                tsconfig: './tsconfig.json'
            }),
            dts()
        ],
        output: {
            file: 'package/domains/index.d.ts',
            format: 'es'
        }
    },
    {
        input: './dns/index.ts',
        plugins: [
            resolve(), 
            commonjs(), 
            typescript({
                typescript: ts,
                tsconfig: './tsconfig.json'
            }),
            dts()
        ],
        output: {
            file: 'package/dns/index.d.ts',
            format: 'es'
        }
    }
]