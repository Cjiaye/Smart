<template>
  <div>
    <el-form :inline="true" :model="loginForm" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="dialogTableVisible = true"
          >新增</el-button
        >
      </el-form-item>
    </el-form>

    <el-dialog title="新增用户" :visible.sync="dialogTableVisible"> </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      loginForm: {
        username: ''
      }
    }
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="scss" scoped></style>
