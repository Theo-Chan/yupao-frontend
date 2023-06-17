<template>
  <van-cell title="昵称"  is-link  :value="user.username" @click = "toedit('username','昵称',user.username)" />
  <van-cell title="账号"  :value="user.userAccount"/>
  <van-cell title="头像"  is-link   :value="user.avataUrl" @click = "" >
    <img src="../assets/vue.svg" style="height: 48px">
  </van-cell>
  <van-cell title="性别" is-link   :value="user.gender" @click = "toedit('gender','性别',user.gender)" />
  <van-cell title="电话" is-link   :value="user.phone"  @click = "toedit('phone','电话',user.phone)"/>
  <van-cell title="邮箱" is-link   :value="user.email" @click = "toedit('email','邮箱',user.email)" />
  <van-cell title="星球账号"  :value="user.palanetCode" />
  <van-cell title="注册时间"  :value="user.createTime" />
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
const router  = useRouter();
const user ={
  id:1233,
  username: "chan",
  userAccount : "Theo",
  avataUrl : "damn",
  gender : "男",
  phone : "123435",
  email : "1235@qq.com",
  palanetCode : "eqt414",
  createTime : Date()
}
const toedit = (editKey:string,editName:string,currentvalue:string) =>{
  router.push(
      {
        path:"/user/edit",
        // 这里没使用动态路由所以用 query
        query:{
          editKey,
          editName,
          currentvalue,
        }

      }
  )
}
</script>

<style scoped>

</style>