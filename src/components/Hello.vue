<template>
    <div>
        <div @click="notice" id="main">Hello {{ name }}</div>
        <DxTextBox :show-clear-button="true" value="Smith" placeholder="Enter full name" value-change-event="keyup" />
        <DxButtonNormal text="Reset" />
    </div>
</template>
<script lang="ts" setup>
import notify from "devextreme/ui/notify"
import DxTextBox from "devextreme-vue/text-box"
import DxButtonNormal from "devextreme-vue/button"

defineProps({ name: String })

async function notice() {
    await notify("Hello")
    // Try to comment me out
}
</script>
