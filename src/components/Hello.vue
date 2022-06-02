<template>
    <div>
        <div id="main" ref="main">Hello {{ name }}</div>
        <!-- <DxTextBox :show-clear-button="true" value="Smith" placeholder="Enter full name" value-change-event="keyup" />
        <DxButtonNormal text="Reset" @click="notice" /> -->
    </div>
</template>
<script lang="ts" setup>
// import notify from "devextreme/ui/notify"
// import DxTextBox from "devextreme-vue/text-box"
// import DxButtonNormal from "devextreme-vue/button"

import { onMounted, ref } from "vue"

defineProps({ name: String })
const main = ref<HTMLDivElement>(null)
setInterval(() => {
    const el = window.document.body
    window.getComputedStyle(el).fontFamily
}, 15)
async function notice() {
    //await notify("Hello")
    // Try to comment me out
}
</script>
