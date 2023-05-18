<template>
    <div>
        <MyTable :arr="list">
            <!-- 使用了组件的插槽 -->
            <template #header>
                <th>#</th>
                <th>商品名称</th>
                <th>价格</th>
                <th>标签</th>
                <th>操作</th>
            </template>
            <!-- 使用了组件的插槽 -->
            <template #body="scope">
                <td>{{ scope.row.id }}</td>
                <td>{{ scope.row.goods_name }}</td>
                <td>{{ scope.row.goods_price }}</td>
                <td>
                    <input class="tag-input form-control" style="width: 100px;" type="text" v-if="scope.row.inputVisible"
                        v-focus v-model="scope.row.inputValue" @blur="scope.row.inputVisible = false"
                        @keydown.enter="addTagsFun(scope.row)" />
                    <button v-else style="display: block;" class="btn btn-primary btn-sm add-tag"
                        @click="scope.row.inputVisible = true">+Tag</button>

                    <span class="badge text-bg-info" v-for="(item, index) in scope.row.tags" :key="index">{{ item }}</span>
                </td>
                <td>
                    <button type="button" class="btn btn-outline-danger" @click="deleteFun(scope.row.id)">删除</button>
                </td>
            </template>
        </MyTable>
    </div>
</template>

<script>
import MyTable from '@/components/MyTable.vue';
export default {
    data() {
        return {
            list: []
        }
    },
    components: {
        MyTable
    },
    created() {
        this.$axios({
            url: '/api/goods',
        }).then(res => {
            this.list = res.data.data;
        })
    },
    methods: {
        deleteFun(id) {
            let index = this.list.findIndex(obj => obj.id === id);
            this.list.splice(index, 1);
        },
        addTagsFun(obj) {
            if (obj.inputValue.trim().length === 0) {
                alert('请输入内容');
            }
            obj.tags.push(obj.inputValue);
            obj.inputValue = '';


        }
    }
}
</script>

<style lang="scss" scoped></style>