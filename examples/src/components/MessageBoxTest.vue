<template>
  <p>基础用法</p>
  <div class="row-gap">
    <a-button @click="show1">展示第1个 MessageBox</a-button>
    <a-button @click="show2">Alert MessageBox</a-button>
    <a-button @click="show3">Confirm MessageBox</a-button>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
import { AMessageBox, AMessage, AButton } from '@ui-library/components'

import '@ui-library/theme/src/dialog.scss'
import '@ui-library/theme/src/message.scss'
import '@ui-library/theme/src/button.scss'

// const instance = getCurrentInstance()
// const $msgbox = instance.appContext.config.globalProperties.$msgbox
// const $alert = instance.appContext.config.globalProperties.$alert
// const $confirm = instance.appContext.config.globalProperties.$confirm

const $msgbox = AMessageBox
const $alert = AMessageBox.alert
const $confirm = AMessageBox.confirm

const show1 = () => {
  // $msgbox()
  // AMessageBox({
  //   title: '警告',
  //   message: '您确认删除此数据吗？',
  //   type: 'warning',
  //   distinguishCancelAndClose: true,
  //   callback: (action) => {
  //     AMessage.info(action)
  //   }
  // })

  $msgbox({
    title: '警告',
    message: '您确认删除此数据吗？',
    type: 'warning',
    distinguishCancelAndClose: true
  })
    .then((action) => {
      AMessage.success(action)
    })
    .catch((action) => {
      AMessage.error({
        content: action,
        background: true
      })
    })
}

const show2 = () => {
  $msgbox
    .alert('警告', '这是一个警告的 alert 消息！', {
      type: 'warning',
      distinguishCancelAndClose: true
    })
    .then((action) => {
      AMessage.success(action)
    })
    .catch((action) => {
      AMessage.error({
        content: action,
        background: true
      })
    })
}

const show3 = () => {
  $msgbox.confirm('温馨提示', '这是一个温馨提示的消息！', {
    type: 'info',
    distinguishCancelAndClose: true,
    callback: (action) => {
      AMessage(action)
    }
  })
}
</script>

<style scoped></style>
