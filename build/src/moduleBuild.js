import { rollup } from 'rollup'
import vue from '@vitejs/plugin-vue'
import nodeResolve from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import postcss from 'rollup-plugin-postcss'
import { inputDir, outputEsm, outputCjs } from './common.js'

const moduleBuildEntry = async () => {
  // 创建打包器
  const wirteBundles = await rollup({
    // 将来，需要配置打包的入口
    input: [],
    plugins: [vue(), nodeResolve(), esbuild(), postcss()],
    external: ['@vueuse/core', 'async-validator', 'vue']
  })

  // esm 打包操作
  wirteBundles.write({
    format: 'esm',
    dir: outputEsm,
    exports: 'named',
    entryFileNames: '[name].js',
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: inputDir
  })

  // cjs 打包操作
  wirteBundles.write({
    format: 'cjs',
    dir: outputCjs,
    exports: 'named',
    entryFileNames: '[name].js',
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: inputDir
  })
}

export const buildModule = async () => {
  return Promise.all([moduleBuildEntry()])
}
