<template>
  <p>文本框</p>
  <div class="col-gap">
    <a-input></a-input>
  </div>

  <p>文本框 - 禁用状态</p>
  <div class="col-gap">
    <a-input disabled></a-input>
  </div>

  <p>文本框 - placeholder & maxLength</p>
  <div class="col-gap">
    <a-input placeholder="请输入11位手机号" :max-length="11"></a-input>
  </div>

  <p>文本框 - size</p>
  <div class="col-gap">
    <a-input size="small"></a-input>
    <a-input></a-input>
    <a-input size="large"></a-input>
  </div>

  <p>文本框 - round</p>
  <div class="col-gap">
    <a-input round size="large"></a-input>
  </div>

  <p>文本框 - 前缀、后缀 icon 图标</p>
  <div class="col-gap">
    <a-input prefix-icon="icon-search" :suffix-icon="PlusCircle"></a-input>
    <a-input prefix-icon="icon-cart-empty" :suffix-icon="Calendar"></a-input>
  </div>

  <p>文本框 - 前缀、后缀文本内容</p>
  <div class="col-gap">
    <a-input prefix="￥" suffix="RMB"></a-input>
  </div>

  <p>文本框 - 前置和后置区域</p>
  <div class="col-gap">
    <a-input>
      <!-- 具名插槽 -->
      <!-- 前置内容 -->
      <template #prepend>
        <a-icon icon="icon-search"></a-icon>
      </template>
      <!-- 后置内容 -->
      <template #append>
        <a-button type="primary">提交</a-button>
      </template>
    </a-input>

    <a-input size="large">
      <!-- 具名插槽 -->
      <!-- 前置内容 -->
      <template #prepend>
        <a-button type="primary">姓名</a-button>
      </template>
      <!-- 后置内容 -->
      <template #append>
        <a-button type="primary">提交</a-button>
      </template>
    </a-input>

    <a-input>
      <!-- 具名插槽 -->
      <!-- 前置内容 -->
      <template #prepend>
        <a-icon icon="icon-search"></a-icon>
      </template>
      <!-- 后置内容 -->
      <template #append>
        <a-icon icon="icon-search"></a-icon>
      </template>
    </a-input>
  </div>

  <p>文本框 - 前置、后置文本内容</p>
  <div class="col-gap">
    <a-input prepend="https://" append=".com"></a-input>
  </div>

  <p>文本框 - password</p>
  <div class="col-gap">
    <a-input password></a-input>
  </div>

  <p>文本框 - 数据双向绑定</p>
  <p>{{ info }}</p>
  <div class="col-gap">
    <a-input v-model="info" @input="inputFn" @clear="clearFn" clearable></a-input>
  </div>

  <p>文本框 - 统计字数</p>
  <div class="col-gap">
    <a-input count max-length="5" v-model="info" width="200"></a-input>
    <!-- 如果文本框只有 count 属性，没有 max-length 属性，则不应该展示统计的字数 -->
    <a-input count width="200px"></a-input>
  </div>

  <p>文本框 - focus 和 blur 事件</p>
  <div class="col-gap">
    <a-input @focus="focusFn" @blur="blurFn"></a-input>
  </div>

  <br />
  <br />
  <br />
  <br />
</template>

<script setup>
import { Calendar, PlusCircle } from '@ui-library/icons'
import { ref } from 'vue'

const info = ref('Hello Escook')

const inputFn = (value, e) => {
  console.log(value)
  console.log(e)
}
const clearFn = () => {
  console.log('文本框内容被清空了！')
}
const focusFn = (e) => {
  console.log('focus:', e)
}
const blurFn = (e) => {
  console.log('blur:', e)
}
</script>
