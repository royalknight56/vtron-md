<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-07-15 10:59:22
 * @Description: 
-->
<template>
    <div class="outer">
        <Win10></Win10>
    </div>
</template>
<script setup>
import { onMounted } from "vue";
import Apphello from "./apphello.vue";
import { AddToDesktop, ClearDesktop, DragWindow } from "vue3-win10";
onMounted(() => {
    ClearDesktop()
    AddToDesktop({
        name: 'HelloWord',
        window: new DragWindow({
            title: 'HelloWord',
            x: 0,
            y: 0,
            content: Apphello
        })
    });
});

</script>
<style scoped>
.outer {
    position: relative;
    width: 500px;
    height: 400px;
}
</style>