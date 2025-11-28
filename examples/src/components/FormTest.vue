<template>
  <p>基础用法</p>

  <!-- model 是表单的数据源 -->
  <a-form
    :model="formData"
    :rules="formRules"
    ref="formRef"
    label-position="right"
    width="400px"
    label-width="100"
  >
    <a-form-item label="姓名" prop="name" :rules="nameRules">
      <a-input v-model="formData.name"></a-input>
    </a-form-item>

    <a-form-item label="手机号" prop="phone">
      <a-input v-model="formData.phone"></a-input>
    </a-form-item>

    <a-form-item label=" ">
      <a-button style="margin-right: 15px">重置</a-button>
      <a-button type="primary" @click="submit">提交</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { ref, shallowRef } from 'vue'

const formData = ref({ name: 'z', phone: '1380000000' })
const formRef = shallowRef(null)

const nameRules = [
  { type: 'string', required: true, message: '姓名不能为空！', trigger: 'blur' },
  { min: 2, max: 5, message: '姓名的长度必须在2-5个字符之间！', trigger: 'change' }
]

const formRules = {
  name: { pattern: /^[a-z]{2,5}$/, message: '姓名必须是2-5位的小写字母', trigger: 'blur' },
  phone: [
    { type: 'string', required: true, message: '手机号不能为空！', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确！', trigger: 'change' }
  ]
}

// 点击提交按钮，触发 submit 函数
const submit = () => {
  // formRef.value.validate((valid, errors) => {
  //   console.log(valid, errors)
  //   if (!valid) return console.log('整个表单中的数据校验失败了！')
  //   console.log('整个表单中的数据校验通过了！', formData.value)
  // })

  // formRef.value
  //   .validate()
  //   .then((data) => {
  //     console.log('表单校验通过：', data)
  //   })
  //   .catch((errors) => {
  //     console.log('表单校验失败：', errors)
  //   })

  // formRef.value.validateFields(['name', 'phone'], (valid, errors) => {
  //   console.log(valid, errors)

  //   if (!valid) return console.log('校验失败！')
  //   console.log('校验成功！')
  // })

  formRef.value
    .validateFields(['name', 'phone'])
    .then((data) => {
      console.log('成功：', data)
    })
    .catch((errors) => {
      console.log('失败：', errors)
    })
}
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
