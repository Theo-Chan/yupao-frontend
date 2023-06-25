<template>

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

</script>

<style scoped>

</style>