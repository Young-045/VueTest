<script  setup>
import { ref, onMounted, inject, reactive } from 'vue'
import MenuList from './MenuList.vue';


const menuApi = inject("$menuApi");

const dataCollection = reactive(
  {
    isDataLoaded: false,
    menuList: [],
  });

const methods = {
  async getMenuItem() {
    console.log('SideBar.getMenuItem');
    await menuApi.getMenuItem()
      .then((res) => {
        console.log(res)
        for (var i = 0; i < res.length; i++) {
          dataCollection.menuList.push(res[i])
        }
        dataCollection.isDataLoaded = true
        console.log(dataCollection.isDataLoaded)
        console.log(dataCollection.menuList)

      })
  },

}

onMounted(async () => {
  await methods.getMenuItem();
})

</script>

<template>
  <div class="layout-container-demo">
    <!--接口获取侧边栏-->
    <!-- 
          <el-scrollbar>
            <el-menu>
                <MenuList :menuList="dataCollection.menuList" v-if="dataCollection.isDataLoaded"></MenuList>
            </el-menu>
        </el-scrollbar>
       -->
    <!--静态侧边栏-->

    <el-scrollbar>
      <el-menu :default-openeds="['1']">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <message />
            </el-icon>Navigator One
          </template>
          <router-link to="/chartShow">
            <el-menu-item index="1-1">
              <el-icon>
                <TrendCharts />
              </el-icon>ChartShow
            </el-menu-item>
          </router-link>
          <router-link to="/dataShow">
            <el-menu-item index="1-2">
              <el-icon>
                <Grid />
              </el-icon>DataShow
            </el-menu-item>
          </router-link>
          <el-sub-menu index="1-4">
            <template #title>Option4</template>
            <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <Menu />
            </el-icon>Navigator Two
          </template>
          <el-menu-item-group>
            <template #title>Group 1</template>
            <el-menu-item index="2-1">Option 1</el-menu-item>
            <el-menu-item index="2-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="2-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="2-4">
            <template #title>Option 4</template>
            <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>

  </div>
</template>
  

  
<style scoped>
.layout-container-demo {
  height: 100%;
  background-color: white;
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-menu {
  height: 100%;
  border-right: none;
}
</style>
