<template>
  <div>
    <div class="left">
      <el-button
        class="zd"
        :class="flag ? 'el-icon-s-unfold ' : 'el-icon-s-fold'"
        @click="zd"
      >
      </el-button>
      <el-tag
        v-for="(item, index) in $store.state.user.tags"
        :key="index"
        :closable="item.path != '/'"
        :class="tagPath === item.path ? 'tags' : 'tag'"
        @click="$router.push(item.path)"
        @close="closeTag(item.meta.title)"
      >
        {{ item.meta.title }}
      </el-tag>
    </div>
    <div class="right">
      <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
        <i class="el-icon-rank" @click="screen"></i>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="关闭全部标签"
        placement="bottom"
      >
        <i class="el-icon-error" @click="gb"></i>
      </el-tooltip>
      <div class="tou">
        <el-avatar
          :size="40"
          :src="$store.state.user.avatar"
          class="avatar"
        ></el-avatar>
      </div>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ $store.state.user.nameinfo
          }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">个人设置</el-dropdown-item>
          <el-dropdown-item command="b">安全退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import router from '@/router'
export default {
  props: ['flag'],
  data() {
    return {
      icon: false,
      isCollapse: true,
      fullscreen: false,
      tagPath: ''
    }
  },
  mounted() {
    this.getlist()
  },
  methods: {
    ...mapActions(['user/allclose', 'user/head', 'user/closeTags']),
    handleCommand(command = 'b') {
      // alert('退出')
      this.$confirm('您确定要退出系统吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$notify({
            title: '提示',
            message: '正在退出...',
            type: 'success'
          })
          localStorage.removeItem('token')
          this.$router.push('/login')
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    zd() {
      this.$emit('zd')
    },
    screen() {
      const element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    },
    gb() {
      this['user/allclose']()
      router.push('/')
    },
    async getlist() {
      await this['user/head']()
    },
    closeTag(name) {
      this['user/closeTags'](name)
      if (router.currentRoute.meta.title === name) {
        router.push('/')
      }
    }
  },
  watch: {
    $route: {
      handler() {
        const data = router.currentRoute
        this.tagPath = data.path
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style scoped lang="scss">
.left {
  width: 78%;
  float: left;
  .el-icon-s-fold,
  .el-icon-s-unfold {
    font-size: 23px;
    color: #fff;
  }
}
.right {
  width: 18%;
  height: 60px;
  float: right;

  .el-icon-rank,
  .el-icon-error {
    float: left;
    margin-right: 18px;
    line-height: 60px;
    font-size: 23px;
    color: #fff;
  }
  .el-icon-rank {
    transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
  }
  .el-dropdown-link {
    cursor: pointer;
    font-size: 18px;
    color: white;
    font-weight: bold;
    margin-right: 10px;
  }
}
.el-dropdown {
  float: right;
}
.tou {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #c0c4cc;
  line-height: 60px;
  float: left;
  margin-top: 10px;
}
.el-dropdown {
  float: rightzd;
}
.zd {
  border: 0;
  background-color: #18bc9c;
  font-size: 25px;
}
.tags {
  background-color: pink;
  color: #fff;
  border: 0;
}
.el-tag {
  margin-left: 10px;
}
.tag {
  background-color: #fff;
  color: pink;
  border: 0;
}
.el-dropdown {
  margin-right: 20px;
}
</style>
