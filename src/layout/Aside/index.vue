<template>
  <div class="aside-container">
    <el-menu
      default-active="/"
      background-color="#303133"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/">
        <i class="el-icon-setting"></i>
        <span slot="title">控制台</span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/sys-users">
          <i class="el-icon-setting"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
        <el-menu-item index="/sys-roles">
          <i class="el-icon-setting"></i>
          <span slot="title">角色管理</span>
        </el-menu-item>
        <el-menu-item index="/sys-menus">
          <i class="el-icon-setting"></i>
          <span slot="title">菜单管理</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss" scoped>
.el-menu {
  background-color: rgb(34, 45, 50);
}
</style>
