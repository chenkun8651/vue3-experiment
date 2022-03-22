<script setup>
import { reactive } from "vue";
const state = reactive({
    money: localStorage.getItem("money") || 0,
    interestRate: localStorage.getItem("interestRate") || 0.03,
});

</script>

<template>
    <p>每天收益（365天）：{{ (state.money * state.interestRate / 365).toFixed(2) }}</p>
    <p>每年收益：{{ (state.money * state.interestRate).toFixed(2) }}</p>
    <p></p>
    <p></p>
</template>
