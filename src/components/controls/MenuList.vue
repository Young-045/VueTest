<script setup>
import { defineProps } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'

const props = defineProps({
    menuList: {
        type: Array,
        default: () => []
    },
});


</script>

<template>
    <template v-for="menu in props.menuList">
        <el-sub-menu v-if="menu.childItem && menu.childItem.length" :key="menu.keyCode"
            :index="menu.keyCode.toString()">
            <template #title>
                {{ menu.menuItemName }}
            </template>
            <el-menu-item-group>
                <MenuList :menuList="menu.childItem" />
            </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item v-else :index="menu.keyCode.toString()">
            <span>{{ menu.menuItemName }}</span>
        </el-menu-item>
    </template>
</template>

  