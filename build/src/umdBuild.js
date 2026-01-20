import { rollup } from 'rollup'
// 导入插件
import vue from '@vitejs/plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import postcss from 'rollup-plugin-postcss'
import { join } from 'node:path'
import { inputDir, outputUmd } from './common.js'

// umd 全量打包的入口函数
const umdBuildEntry = async (isMinify = false) => {
  // 创建打包器
  const writeBundles = await rollup({
    // 入口相关的配置
    // 打包的入口模块
    input: join(inputDir, 'index.js'),
    plugins: [vue(), nodeResolve(), esbuild({ minify: isMinify, sourceMap: true }), postcss()],
    external: ['vue']
  })

  // 调用打包器的 write 函数，进行打包
  await writeBundles.write({
    // 输出配置
    // 打包的格式
    format: 'umd',
    // 输出的文件路径（需要包含文件名）
    file: join(outputUmd, `index.full${isMinify ? '.min' : ''}.js`),
    // 组件库的全局变量名称
    name: 'EscookUI',
    // 只使用具名导出
    exports: 'named',
    // 外部依赖
    globals: { vue: 'Vue' }
  })
}

// umd 全量打包 svg 图标的入口函数
const umdSvgBuildEntry = async (isMinify = false) => {
  // 创建打包器
  const writeBundles = await rollup({
    // 入口相关的配置
    // 打包的入口模块
    input: join(inputDir, 'icons/index.js'),
    plugins: [vue(), nodeResolve(), esbuild({ minify: isMinify, sourceMap: true })],
    external: ['vue']
  })

  // 调用打包器的 write 函数，进行打包
  await writeBundles.write({
    // 输出配置
    // 打包的格式
    format: 'umd',
    // 输出的文件路径（需要包含文件名）
    file: join(outputUmd, `icon.full${isMinify ? '.min' : ''}.js`),
    // 组件库的全局变量名称
    name: 'EscookIcon',
    // 只使用具名导出
    exports: 'named',
    // 外部依赖
    globals: { vue: 'Vue' }
  })
}

// 今后，凡是需要放到 gulp.series 中的任务，必须是 async 异步函数，且必须 return Promise 对象
export const buildUmd = async () => {
  return Promise.all([
    umdBuildEntry(),
    umdBuildEntry(true),
    umdSvgBuildEntry(),
    umdSvgBuildEntry(true)
  ])
}

// 测试 umd 打包
// buildUmd()
