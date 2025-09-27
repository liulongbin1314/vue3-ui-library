<template>
  <p>基础按钮</p>
  <div class="row-gap">
    <a-button>默认</a-button>
    <a-button type="priamry">主要</a-button>
    <a-button type="success">成功</a-button>
    <a-button type="warning">警告</a-button>
    <a-button type="error">错误</a-button>
  </div>

  <hr />

  <p>圆角按钮</p>
  <div class="row-gap">
    <a-button round>默认</a-button>
    <a-button type="priamry" round>主要</a-button>
    <a-button type="success" round>成功</a-button>
    <a-button type="warning" round>警告</a-button>
    <a-button type="error" round>错误</a-button>
  </div>

  <p>禁用按钮</p>
  <div class="row-gap">
    <a-button disabled>默认</a-button>
    <a-button type="priamry" disabled>主要</a-button>
    <a-button type="success" disabled>成功</a-button>
    <a-button type="warning" disabled>警告</a-button>
    <a-button type="error" disabled>错误</a-button>
  </div>

  <p>文字按钮</p>
  <div class="row-gap">
    <a-button text>默认</a-button>
    <a-button type="priamry" text>主要</a-button>
    <a-button type="success" text>成功</a-button>
    <a-button type="warning" text>警告</a-button>
    <a-button type="error" text>错误</a-button>
  </div>

  <p>链接按钮</p>
  <div class="row-gap">
    <a-button link>默认</a-button>
    <a-button type="priamry" link>主要</a-button>
    <a-button type="success" link>成功</a-button>
    <a-button type="warning" link>警告</a-button>
    <a-button type="error" link>错误</a-button>
  </div>

  <p>边框按钮</p>
  <div class="row-gap">
    <a-button border>默认</a-button>
    <a-button type="priamry" border>主要</a-button>
    <a-button type="success" border>成功</a-button>
    <a-button type="warning" border>警告</a-button>
    <a-button type="error" border>错误</a-button>
  </div>

  <p>虚线边框按钮</p>
  <div class="row-gap">
    <a-button border dashed>默认</a-button>
    <a-button type="priamry" border dashed>主要</a-button>
    <a-button type="success" border dashed>成功</a-button>
    <a-button type="warning" border dashed>警告</a-button>
    <a-button type="error" border dashed>错误</a-button>
  </div>

  <p>块级按钮</p>
  <div class="col-gap">
    <a-button block>默认</a-button>
    <a-button type="priamry" block>主要</a-button>
    <a-button type="success" block>成功</a-button>
    <a-button type="warning" block>警告</a-button>
    <a-button type="error" block>错误</a-button>
  </div>

  <p>按钮尺寸</p>
  <div class="row-gap">
    <a-button>默认</a-button>
    <a-button type="priamry" size="default">主要</a-button>
    <a-button type="success" size="large">成功</a-button>
    <a-button type="warning" size="small">警告</a-button>
    <a-button type="error" size="small">错误</a-button>
  </div>
</template>

<script setup>
// 按需导入 Button 组件
// import { AButton } from '../../../packages'
</script>

<style scoped>
.row-gap {
  display: flex;
  gap: 0 10px;
  align-items: center;
}

.col-gap {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
</style>
