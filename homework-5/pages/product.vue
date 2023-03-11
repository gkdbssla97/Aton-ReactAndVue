<template>
    <div>
        <h2 style="paddingLeft: 300px"> PRODUCT PAGE </h2>
        <div style="paddingLeft: 100px">
            <select v-model="tmp_ps" @input="tmp_ps">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="30">30</option>
            </select>
        </div>
        <div style="display:flex;">
            <div>
                <leftmenu />
            </div>
            <div>
                <table>
                    <thead>
                        <th v-for="item in this.column"> {{ item }}</th>
                    </thead>
                    <tbody>
                        <tr v-for="row in pagenatedData">
                            <td v-for="item in this.column">
                            <td v-if="item == 'image'">
                                <img style="width: 300px;" :src=row[item] />
                            </td>
                            <td v-else>
                            <td v-if="item == 'description'" style="font-size: 15px width: 30px;">
                                {{ row[item] }}</td>
                            <td v-else>{{ row[item] }}</td>
                            </td>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="btn-cover" style="paddingLeft: 100px">
                    <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">이전</button>
                    <span class="page-count">{{ pageNum + 1 }} / {{ tmp_ps }} 페이지</span>
                    <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">다음</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import product from "@/data_files/product.json"
import leftmenu from "@/pages/leftmenu.vue"

export default {
    name: "Product",
    components: {leftmenu},
    name: 'paginated-list',

    data() {
        return {
            tmp_ps: 5,
            number: 0,
            bindingValue: this.default,
            pageNum: 0,
            perPageList: [
                { id: 1, value: 5, },
                { id: 2, value: 10 },
                { id: 3, value: 20 },
                { id: 4, value: 40 }
            ],
            column: [
                'uuid',
                'productName',
                'image',
                'price',
                'description',
                'registeredAt'
            ],
            BASEURI: '',
            product_list: product
        }
    },
    mounted() {
        console.log("mounted")

    },
    created() {
        console.log("created")
    },
    updated() {
        console.log("updated")
    },
    watch: {
        selectPage() {
            console.log(this.perPageList.value)
        }
    },
    computed: {
        pageCount() {
            let listLen = this.product_list.length,
                listSize = this.pageSize,
                page = Math.floor(listLen / listSize);

            if (listLen % listSize > 0) page += 1;

            return page;
        },
        pagenatedData() {
            const start = this.pageNum * this.tmp_ps,
                end = start + this.tmp_ps;
            console.log(this.tmp_ps)
            return this.product_list.slice(start, end);
        }
    },
    methods: {
        selectPages($event) {
            this.$emit('input', $event.target.default)
        },
        nextPage() {
            this.pageNum += 1;
        },
        prevPage() {
            this.pageNum -= 1;
        },
    }
}
</script>

<style>
h2 {
    text-align: left;
    color: darkblue;
}

table {
    width: 30px;
    text-align: left;
    padding-left: 100px;
}

table th {
    text-align: center;
    padding: 12px;
    background-color: #b5f7bb;
    border-top: 2px solid #04AA6D;
    border-bottom: 2px solid #04AA6D;
}

table tr:nth-of-type(even) {
    background-color: #5ce4271a;
}
</style>