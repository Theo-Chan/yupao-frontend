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
  import {ref} from "vue";
  const route = useRoute();
  const {tags}  = route.query;
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
  const userList  = ref([mockUser]);
</script>

<style scoped>

</style>