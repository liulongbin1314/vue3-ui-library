<template>
  <a-container>
    <a-header>Header</a-header>
    <a-main>Main</a-main>
  </a-container>
</template>

<style scoped>
.a-container {
  height: 200px;
}

.a-header,
.a-main,
.a-footer,
.a-aside {
  display: flex;
  justify-content: center;
  align-items: center;
}

.a-header,
.a-footer {
  background-color: #a29bdb;
}

.a-main {
  background-color: #edeaff;
  flex: 1;
}

.dark {
  .a-header,
  .a-footer {
    background-color: #362e7e;
  }
  .a-main {
    background-color: #493ea8;
  }
}
</style>
