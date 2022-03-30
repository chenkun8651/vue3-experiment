<script setup>
import { reactive, computed, onMounted, onBeforeUnmount } from "vue";
// 数据源
const state = reactive({
  money: localStorage.getItem("money") || 0,
  interestRate: localStorage.getItem("interestRate") || 0.03,
});
// 日收益
const dayIncome = computed(() => {
  return ((state.money * state.interestRate) / 365).toFixed(2);
});
// 年收益
const yearIncome = computed(() => {
  return (state.money * state.interestRate).toFixed(2);
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
  <p>
    <span class="text-red-500">每天收益（365天）：</span>
    <span>{{ dayIncome }}</span>
  </p>
  <p>
    <span>每年收益：</span>
    <span>{{ yearIncome }}</span>
  </p>
</template>
