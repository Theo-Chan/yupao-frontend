<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="editUser.currentValue"
          :name="editUser.editKey"
          :label="editUser.editName"
          :placeholder="`请修改${editUser.editName}`"
          :rules="[{ required: true, message: '不能为空' }]"
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
import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute();
// 封装一个响应式对象
const editUser = ref({
  editKey:route.query.editKey,
  currentValue:route.query.currentValue,
  editName:route.query.editName,
})
console.log(route.query.editKey)
const onSubmit = (values) => {
  // todo 把editKey,editKey,editName 提交到后端
  console.log('submit', values);
  console.log(editUser.value.currentValue)
};
</script>

<style scoped>

</style>