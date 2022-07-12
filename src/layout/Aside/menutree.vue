<template>
  <el-submenu
    :index="data.path"
    v-if="data.children.length != 0 && data.component === null"
  >
    <template slot="title">
      <i :class="'el-icon-' + data.icon"></i>
      <span slot="title">{{ data.label }}</span>
    </template>
    <menutree
      v-for="(item, index) in data.children"
      :key="index"
      :data="item"
    ></menutree>
  </el-submenu>
  <el-menu-item-group v-else>
    <el-menu-item :index="data.path">
      <i :class="'el-icon-' + data.icon"></i>
      <span slot="title"> {{ data.label }}</span>
    </el-menu-item>
  </el-menu-item-group>
</template>

<script>
export default {
  name: 'menutree',
  props: ['data'],
  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="scss" scoped></style>
