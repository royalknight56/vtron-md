<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-07-15 10:59:22
 * @Description: 
-->
<template>
<ClientOnly>
    <div class="outer">
        <Win10 :system="system"></Win10>
    </div>
</ClientOnly>
</template>
<script setup>
import { onMounted } from "vue";
import Apphello from "./apphello.vue";
import { System } from "vue3-win10";
let system = new System({});
onMounted(() => {
    system.ClearDesktop()
    system.AddToDesktop({
        name: 'HelloWord',
        window: system.DragWindow({
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