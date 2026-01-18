import { rollup } from 'rollup'

// umd 全量打包的入口函数
const umdBuildEntry = async (isMinify = false) => {
  // 创建打包器
  const writeBundles = await rollup({
    // 入口相关的配置
  })

  // 调用打包器的 write 函数，进行打包
  await writeBundles.write({
    // 输出配置
  })
}
