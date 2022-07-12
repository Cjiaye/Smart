<template>
  <div class="aside-container">
    <el-menu
      default-active="/"
      background-color="#303133"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <menutree
        v-for="(item, index) in list"
        :key="index"
        :data="item"
      ></menutree>
    </el-menu>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import store from '@/store'
import menutree from './menutree'
export default {
  components: { menutree },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getlist()
  },
  methods: {
    ...mapActions(['user/navMenu']),
    async getlist() {
      await this['user/navMenu']()
      this.list = store.state.user.menus
      console.log(store.state.user)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  background-color: rgb(34, 45, 50);
}
</style>
