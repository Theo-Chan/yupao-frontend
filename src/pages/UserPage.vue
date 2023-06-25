<template>
<!--  进行一次数据校验 如果没有获取到用户信息就不展示-->
  <template v-if="user" >
    <van-cell title="昵称"  is-link  :value="user.username" @click = "toedit('username','昵称',user.username)" />
    <van-cell title="账号"  :value="user.userAccount"/>
    <van-cell title="头像"  is-link   :value="user.avatarUrl" @click = "" >
      <img src="../assets/vue.svg" style="height: 48px">
    </van-cell>
    <van-cell title="性别" is-link   :value="getGender()" @click = "toedit('gender','性别',getGender())" />
    <van-cell title="电话" is-link   :value="user.phone"  @click = "toedit('phone','电话',user.phone)"/>
    <van-cell title="邮箱" is-link   :value="user.email" @click = "toedit('email','邮箱',user.email)" />
    <van-cell title="星球账号"  :value="user.planetCode" />
    <van-cell title="注册时间"  :value="user.createTime" />
  </template>

</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios";
import {showFailToast} from "vant";
import {getCurrentUser} from "../services/user";
const router  = useRouter();
const user = ref();
onMounted( async () =>{
  user.value = await getCurrentUser();
})
// const user ={
//   id:1233,
//   username: "chan",
//   userAccount : "Theo",
//   avatarUrl : "damn",
//   gender : "男",
//   phone : "123435",
//   email : "1235@qq.com",
//   palanetCode : "eqt414",
//   createTime : Date()
// }
/*
* todo 转换性别
* */
const getGender = () =>{
  if (user.value.gender === 0)
    return '男'
  else return '女'
}
const toedit = (editKey:string,editName:string,currentValue:string) =>{
  router.push(
      {
        path:"/user/edit",
        // 这里没使用动态路由所以用 query
        query:{
          editKey,
          editName,
          currentValue,
        }

      }
  )
}
// console.log('性别',getGender())

</script>

<style scoped>

</style>