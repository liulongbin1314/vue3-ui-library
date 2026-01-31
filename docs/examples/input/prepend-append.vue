<template>
  <p>通过属性设置前置、后置文本：</p>
  <a-input width="350" prepend="https://" append=".com"></a-input>

  <hr />
  <p>通过 slot 设置前置、后置图标：</p>
  <a-input width="350">
    <!-- 具名插槽：前置内容 -->
    <template #prepend>
      <div style="width: 35px; text-align: center"><a-icon icon="icon-lock"></a-icon></div>
    </template>
    <!-- 具名插槽：后置内容 -->
    <template #append>
      <div style="width: 35px; text-align: center"><a-icon icon="icon-search"></a-icon></div>
    </template>
  </a-input>

  <hr />
  <p>通过 slot 设置前置、后置按钮：</p>
  <a-input width="350">
    <!-- 具名插槽：前置内容 -->
    <template #prepend>
      <a-button type="primary">姓名</a-button>
    </template>
    <!-- 具名插槽：后置内容 -->
    <template #append>
      <a-button type="primary">提交</a-button>
    </template>
  </a-input>
</template>
