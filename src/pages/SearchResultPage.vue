<template>
<!--  卡片-->
  <van-card v-for="user in userList"
      :desc="user.profile"
      :title="`${user.username}(${user.palanetCode})`"
      tag="角标" :thumb="user.avataUrl"
  >
    <template #tags >
      <van-tag plain type="primary" v-for="tag in user.tags" style="margin-right: 8px ;margin-top: 8px">{{tag}}</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>

</template>

<script setup lang="ts">
  import {useRoute} from "vue-router";
  import {onMounted, ref} from "vue";
  import myAxios from "../plugins/myAxios.ts";
  import {showFailToast, showSuccessToast, Toast} from "vant";
  import * as qs from 'qs'
  const route = useRoute();
  const {tags}  = route.query;
  const userList  = ref([]);

  // 使用钩子在加载的时候发送get请求获取数据
  onMounted(async () =>{
    const userListData = await myAxios.get('/user/search/tags',{
      params:{
        tagNameList : tags
      },
      // 对params 进行序列化操作
      paramsSerializer: (params) => {
        return qs.stringify(params,{indices:false})
      }
    }).then(function (response){
      // 规范日志输出
      console.log('/user/search/tags succeed ',response)
      showSuccessToast("请求成功")
      // 返回数据
      return response.data?.data;
    })
        .catch(function (error){
          // 规范日志输出
          console.log('/user/search/tags error',error)
          showFailToast("请求失败")
        })
    if (userListData)
    {
      userList.value = userListData;
    }
  })
  /**
   * 注意：将mockUser定义在使用之前否则会出现报错
   * **/
  const mockUser  = {
    id:12343,
    username: "chan",
    userAccount : "1434",
    avataUrl : "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
    profile :"这是一段个人简介这是一段个人简介这是一段个人简介这是一段个人简介这是一段个人简介这是一段个人简介这是一段个人简介这是一段个人简介",
    gender : 0,
    phone : "1235463634234",
    email : "123425@qq.com",
    userRole : 0,
    palanetCode : "1234",
    tags :["java","emo","打工中"],
    createTime : new Date(),
  }

</script>

<style scoped>

</style>