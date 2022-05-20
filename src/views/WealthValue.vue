<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from "vue";
// 数据源
const state = reactive({
  money: localStorage.getItem("money") || 0, // 当前存款
  interestRate: localStorage.getItem("interestRate") || 3, // 收益率
});
// 年均收益
const yearIncome = computed(() => {
  return (state.money * state.interestRate * 0.01).toFixed(2);
});
// 日均收益
const dayIncome = computed(() => {
  return ((state.money * state.interestRate * 0.01) / 365).toFixed(2);
});
onMounted(() => {
  window.addEventListener("storage", (e) => {
    if (e.key === "money") {
      state.money = e.newValue;
    } else if (e.key === "interestRate") {
      state.interestRate = e.newValue;
    }
  });
});
onBeforeUnmount(() => {
  window.removeEventListener("storage");
});
</script>

<template>
  <div class="wealth">
    <a-card class="wealth-card" title="王之宝库">
      <template #extra>
        <a-button type="primary">编辑模式</a-button>
      </template>
      <p>
        <span>存款：</span>
        <span>{{ state.money }}</span>
      </p>
      <p>
        <span>收益率（%）：</span>
        <span>{{ state.interestRate }}</span>
      </p>
      <p>
        <span>每年收益：</span>
        <span>{{ yearIncome }}</span>
      </p>
      <p>
        <span>每天收益（365天）：</span>
        <span>{{ dayIncome }}</span>
      </p>
    </a-card>
  </div>
</template>

<style>
.wealth {
  display: flex;
}
.wealth-card {
  width: 360px;
}
</style>
