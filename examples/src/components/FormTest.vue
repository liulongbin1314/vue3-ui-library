<template>
  <p>基础用法</p>

  <!-- model 是表单的数据源 -->
  <a-form :model="formData" label-position="right" width="400px" label-width="100">
    <a-form-item label="姓名" prop="name">
      <a-input></a-input>
    </a-form-item>

    <a-form-item label="手机号" prop="phone">
      <a-input></a-input>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { ref } from 'vue'

const formData = { name: 'zs', phone: '13800000001' }
</script>

<script>
// import Schema from 'async-validator'

// const rules = {
//   name: [
//     { type: 'string', required: true, message: '姓名不能为空' },
//     { min: 2, max: 5, message: '姓名的长度必须是2-5之间' }
//   ],
//   phone: [
//     { type: 'string', required: true, message: '手机号不能为空' },
//     { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确' }
//   ]
// }

// const data = { name: 'zs', phone: '13800000001' }

// const validator = new Schema(rules)

// validator.validate(data, (errors, fields) => {
//   console.log('errors: ', errors)
//   console.log('fields: ', fields)
// })
</script>

<style scoped></style>
