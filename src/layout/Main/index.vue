<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-breadcrumb separator="/" v-if="$router.currentRoute.path != '/'">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item, index) in list" :key="index">
            {{ item }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <router-view></router-view>
    </el-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import router from '@/router'
export default {
  mounted() {},
  methods: {
    ...mapActions(['user/tags'])
  },
  watch: {
    $route: {
      handler() {
        const data = router.currentRoute
        const array = []
        data.matched.forEach((item) => {
          array.push(item.meta.title)
        })
        this.list = array
        this['user/tags'](data)
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style scoped></style>
