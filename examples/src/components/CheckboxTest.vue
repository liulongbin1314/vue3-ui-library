<template>
  <p>基础用法</p>
  <div>
    <a-checkbox label="北京市"></a-checkbox>
    <a-checkbox label="上海市"></a-checkbox>
  </div>

  <p>勾选状态</p>
  <div>
    <a-checkbox label="北京市" checked></a-checkbox>
  </div>

  <p>禁用状态</p>
  <div>
    <a-checkbox label="北京市" disabled></a-checkbox>
    <a-checkbox label="北京市" checked disabled></a-checkbox>
  </div>

  <p>主题颜色</p>
  <div>
    <a-checkbox label="北京市" checked></a-checkbox>
    <a-checkbox label="北京市" checked type="primary"></a-checkbox>
    <a-checkbox label="北京市" checked type="success"></a-checkbox>
    <a-checkbox label="北京市" checked type="warning"></a-checkbox>
    <a-checkbox label="北京市" checked type="error"></a-checkbox>
  </div>
  <div>
    <a-checkbox label="北京市" checked disabled></a-checkbox>
    <a-checkbox label="北京市" checked disabled type="primary"></a-checkbox>
    <a-checkbox label="北京市" checked disabled type="success"></a-checkbox>
    <a-checkbox label="北京市" checked disabled type="warning"></a-checkbox>
    <a-checkbox label="北京市" checked disabled type="error"></a-checkbox>
  </div>

  <p>尺寸</p>
  <div>
    <a-checkbox label="北京市" checked type="primary" size="small"></a-checkbox>
    <a-checkbox label="北京市" checked type="success" size="default"></a-checkbox>
    <a-checkbox label="北京市" checked type="warning" size="large"></a-checkbox>
    <a-checkbox label="北京市" checked type="error"></a-checkbox>
  </div>
</template>

<script setup></script>

<style scoped></style>
