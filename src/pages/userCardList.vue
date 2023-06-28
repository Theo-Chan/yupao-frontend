<template>
<!--将公共的列表提取出来以组件的形式引入-->
  <!--  卡片-->
  <van-card v-for="user in props.userList"
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
//定义一个数据类型用于接收父组件传递过来的值
interface UserCardListProps{
  userList:UserType[]
}
// 给userList一个初始默认值防止穿过来的是一个 null
const props =withDefaults(defineProps<UserCardListProps>(),{
  userList:[] as UserType[]
})
</script>

<style scoped>

</style>