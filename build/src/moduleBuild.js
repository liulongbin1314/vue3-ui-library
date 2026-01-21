import { rollup } from 'rollup'
import vue from '@vitejs/plugin-vue'
import nodeResolve from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import postcss from 'rollup-plugin-postcss'
import { inputDir, outputEsm, outputCjs, uiLibraryName } from './common.js'
import FastGlob from 'fast-glob'

// 自定义 rollup 插件，替换模块化样式的导入路径
const compileStyleEntry = () => {
  // 定义需要处理的路径前缀
  const pre = '@ui-library/theme/src'

  return {
    name: '',
    resolveId(id) {
      if (id.startsWith(pre)) {
        return {
          id: id.replace(pre, `${uiLibraryName}/theme/src`).replace('.scss', '.css'),
          external: 'absolute'
        }
      }
    }
  }
}

const moduleBuildEntry = async () => {
  // 检索需要被打包的文件的路径，返回值是数组
  const input = await FastGlob('**/*.{js,vue}', {
    cwd: inputDir,
    onlyFiles: true,
    absolute: true
  })

  // 创建打包器
  const wirteBundles = await rollup({
    // 将来，需要配置打包的入口
    input,
    plugins: [compileStyleEntry(), vue(), nodeResolve(), esbuild(), postcss()],
    external: ['@vueuse/core', 'async-validator', 'vue']
  })

  // esm 打包操作
  await wirteBundles.write({
    format: 'esm',
    dir: outputEsm,
    exports: 'named',
    entryFileNames: '[name].js',
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: inputDir
  })

  // cjs 打包操作
  await wirteBundles.write({
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
