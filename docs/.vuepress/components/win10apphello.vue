<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-01-28 11:18:12
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
        name: '我的电脑',
        window: new DragWindow({
            title: '我的电脑',
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