// 形参 com 就是需要被全局注册的组件
export const componentInstall = (com) => {
  // 把 com 组件，定义成一个可以被安装的插件，
  // 这样，就可以使用 app.use(com) 来安装这个插件了。
  // 注意：只要使用 app.use() 安装了 com 插件，就会自动执行插件身上的 install 方法
  com.install = (app) => {
    // 自动进行组件的全局注册
    app.component(com.name, com)
  }

  return com
}

// 此工具函数，用于向全局安装函数式组件
export const functionInstall = (fn, name, obj) => {
  fn.install = (app) => {
    app.config.globalProperties[name] = fn

    if (Object.prototype.toString.call(obj) === '[object Object]' && typeof obj !== 'function') {
      for (const key in obj) {
        app.config.globalProperties[key] = obj[key]
      }
    }
  }
  return fn
}
