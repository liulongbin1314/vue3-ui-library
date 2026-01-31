<template>
  <p>width 宽度：</p>
  <div class="box">
    <label>
      <span>120px：</span>
      <a-input width="120px" placeholder="请输入内容"></a-input>
    </label>
    <label>
      <span>240px：</span>
      <a-input width="240px" placeholder="请输入内容"></a-input>
    </label>
    <label>
      <span>480px：</span>
      <a-input width="480px" placeholder="请输入内容"></a-input>
    </label>
  </div>

  <hr />
  <p>size 尺寸：</p>
  <div class="box">
    <label>
      <span>small：</span>
      <a-input width="240px" placeholder="请输入内容" size="small"></a-input>
    </label>
    <label>
      <span>default：</span>
      <a-input width="240px" placeholder="请输入内容" size="default"></a-input>
    </label>
    <label>
      <span>large：</span>
      <a-input width="240px" placeholder="请输入内容" size="large"></a-input>
    </label>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

label {
  display: flex;
  align-items: center;
  font-size: 12px;
}

label > span {
  width: 100px;
  text-align: right;
}
</style>
