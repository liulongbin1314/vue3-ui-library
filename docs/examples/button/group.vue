<template>
  <p>默认尺寸</p>
  <a-button-group>
    <a-button>上传</a-button>
    <a-button>下载</a-button>
    <a-button>删除</a-button>
  </a-button-group>

  <p>small 尺寸</p>
  <a-button-group size="small" type="success">
    <a-button>主要</a-button>
    <a-button>成功</a-button>
    <a-button>警告</a-button>
  </a-button-group>

  <p>large 尺寸</p>
  <a-button-group size="large" type="primary">
    <a-button icon="icon-success" type="success">成功</a-button>
    <a-button icon="icon-warning" type="warning">警告</a-button>
    <a-button icon="icon-error" type="error">错误</a-button>
  </a-button-group>
</template>

<style scoped>
.container {
  display: flex;
  gap: 15px;
}
</style>
