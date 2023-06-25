<template>
<!--
todo 笔记 父子组件传参  #6 00：25：12
-->

  <!--  卡片-->
  <van-card v-for="user in userList"
            :desc="user.profile"
            :title="`${user.username}(${user.planetCode})`"
            tag="角标" :thumb="user.avatarUrl"
  >
    <template #tags >
      <van-tag plain type="primary" v-for="tag in user.tags" style="margin-right: 8px ;margin-top: 8px">{{tag}}</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
  <!--  没有查询到信息时显示这个组件-->
  <van-empty v-if="!userList || userList.length < 1" image="search" description="啊哦！ 没有找到任何信息" />
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios";
import {showFailToast, showSuccessToast} from "vant";
const userList  = ref([]);
// 使用钩子在加载的时候发送get请求获取数据
onMounted(async () =>{
  const userListData:[UserType]  = await myAxios.get('/user/recommend',{})
      .then(function (response)
      {
        // 规范日志输出
        console.log('/user/recommend succeed ',response)
        showSuccessToast("请求成功")
        // 返回数据
        return response?.data;
      })
      .catch(function (error){
        // 规范日志输出
        console.log('/user/recommend error',error)
        showFailToast("请求失败")
      })
  // 进行一次数据校验确认拿到了 userListData
  console.log("内容",userList.value)
  if (userListData)
  {
    // 从后端拿的是一个JSON数组需要在这里将tag转换成对象
    userListData.forEach(user =>{
      if (user.tags)
      {
        // todo NTS(not the same)  #4 1:40:12
        // @ts-ignore
        user.tags =JSON.parse(user.tags)
      }
    })
    // 将后端拿到的数据赋给userList
    userList.value = userListData;

  }
})


// }
</script>

<style scoped>

</style>