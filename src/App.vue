<template>
  <div>
    <MyHeader background="red" fontColor="white" textContent="tabbar案列"></MyHeader>
    <div class="main">
      <template>
        <!-- 使用组件切换 -->
        <MyGoodsList :is="currentName"></MyGoodsList>
      </template>
    </div>
    <MyTablBar :arr="tabList" @changeName="changeNameFun"></MyTablBar>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyTablBar from './components/MyTablBar.vue';
import MyGoodsList from './views/MyGoodsList.vue';
import MyGoodsSearch from './views/MyGoodsSearch.vue';
import MyUserInfo from './views/MyUserInfo.vue';
export default {
  data() {
    return {
      currentName: 'MyGoodsList',
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList"
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch"
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo"
        }
      ]
    }
  },
  components: {
    MyHeader,
    MyTablBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo
  },
  methods: {
    changeNameFun(curName) {
      this.currentName = curName;
    }
  }
}
</script>

<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 51px;
}
</style>