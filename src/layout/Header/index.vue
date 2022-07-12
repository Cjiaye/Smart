<template>
  <div>
    <div class="zuo"></div>
    <div class="you">
      <el-dropdown>
        <span class="el-dropdown-link">
          <i class="avatar_H hand el-avatar el-avatar--circle"></i>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人设置</el-dropdown-item>
          <el-dropdown-item @click="logout">安全退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.logout()
  },
  methods: {
    logout() {}
  }
}
</script>

<style scoped>
.you {
  float: right;
}
.el-avatar {
  margin-top: 12px;
}
</style>
