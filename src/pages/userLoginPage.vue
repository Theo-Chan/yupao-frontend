<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="userAccount"
          label="账号"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
          v-model="userPassword"
          type="password"
          name="userPassword"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<script setup lang="ts">
import {ref} from "vue";
import myAxios from "../plugins/myAxios";
import {showFailToast, showSuccessToast} from "vant";
import {useRouter} from "vue-router";
const router = useRouter();
const userAccount = ref('');
const userPassword = ref('');
const onSubmit =async () => {
  const res = await myAxios.post('user/login',{
    userAccount:userAccount.value,
    userPassword:userPassword.value
  })
  if (res.code === 0 && res.data )
  {
    showSuccessToast('登录成功')
    // 这里不用 push是因为 push是压入一个操作使用返回会退回到登录页面
    router.replace('/')
  }
  else showFailToast('登录失败')
  console.log(res);
};
</script>

<style scoped>

</style>
