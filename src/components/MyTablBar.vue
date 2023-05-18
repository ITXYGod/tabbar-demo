<template>
    <div class="my-tab-bar">
        <div class="tab-item" v-for="(obj, index) in arr" :key="index" :class="{ current: currentIndex === index }"
            @click="btnChange(obj.componentName, index)">
            <!-- 图标 -->
            <span class="iconfont" :class="obj.iconText"></span>
            <!-- 文字 -->
            <span>{{ obj.text }}</span>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            currentIndex: 0
        }
    },
    props: {
        arr: {
            type: Array,
            required: true,
            validator(arrData) {
                if (arrData.length >= 2 && arrData.length <= 5) {
                    return true;
                } else {
                    console.error('数据必须在2-5之间');
                    return false;
                }
            }
        }

    },
    methods: {
        btnChange(curName, index) {
            this.currentIndex = index;
            this.$emit('changeName', curName);
        }
    }

}
</script>
  
<style lang="less" scoped>
.my-tab-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;

    .tab-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.current {
    color: #1d7bff;
}
</style>