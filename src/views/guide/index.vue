<template>
  <el-form>
    <el-form-item>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-form-item label="数据内容" prop="configContent">
        <vue-json-editor
          style="height: 300px"
          v-model="jsonEditorValue"
          :showBtns="false"
          :mode="'code'"
          lang="zh"
        />
      </el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
      <p>{{ redisStr1 }}</p >
    </el-form-item>
  </el-form>
</template>
<script>
import vueJsonEditor from "vue-json-editor";
import { logout ,logout1} from "@/api/requestFF.js";
export default {
  name: "PagePermission",
  components: { vueJsonEditor },
  data() {
    return {
      input: "asdasd",
      redisStr1: "credit_userid_",
      jsonEditorValue: {
        redisStr1: "credit_userid_",
      },
    };
  },
  methods: {
    onSubmit() {
      logout1(this.input).then((res) => {
        console.log("ssssssssssssssssssss")
        this.redisStr1 = res.data;
                console.log(res)

      });
    },
  },
};
</script>