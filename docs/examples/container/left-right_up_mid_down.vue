<template>
  <a-container>
    <a-aside width="200px">Aside</a-aside>
    <a-container>
      <a-header>Header</a-header>
      <a-main>Main</a-main>
      <a-footer>Footer</a-footer>
    </a-container>
  </a-container>
</template>

<style scoped>
.a-container {
  min-height: 250px;
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

.a-aside {
  background-color: #e4dfff;
}

.dark {
  .a-header,
  .a-footer {
    background-color: #322a75;
  }
  .a-main {
    background-color: #493ea8;
  }
  .a-aside {
    background-color: #41379a;
  }
}
</style>
