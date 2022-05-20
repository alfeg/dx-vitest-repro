<template>
<div>
<div @click="notice" id="main">Hello {{name}}</div>

</div>
</template>
<script lang="ts" setup>
import notify from "devextreme/ui/notify"

defineProps({ name: String})

function notice(){
    // Try to comment me out
    notify("Hello")
}

</script>