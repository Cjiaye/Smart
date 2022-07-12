<template>
  <el-container>
    <el-aside :style="{ width: flag ? '49px' : '200px' }">
      <AppAside></AppAside>
    </el-aside>
    <el-container>
      <el-header>
        <AppHeader :flag="flag" @zd="zd"></AppHeader>
      </el-header>
      <el-main>
        <AppMain></AppMain>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from '@/layout/Aside/index'
import AppMain from '@/layout/Main'
import AppHeader from '@/layout/Header'
export default {
  name: 'index',
  data() {
    return {
      flag: false
    }
  },
  components: {
    AppAside,
    AppMain,
    AppHeader
  },
  methods: {
    zd() {
      this.flag = !this.flag
    }
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #18bc9c;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: rgb(34, 45, 50);
  color: #333;
}

.el-main {
  background-color: #e8edf0;
  color: #333;
}
</style>
