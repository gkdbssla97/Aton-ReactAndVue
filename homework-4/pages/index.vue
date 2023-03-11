<template>
    <div>
        <h2> Random Data Size is {{ getRouterParam(BASEURI) }}</h2>
        <select v-model="tmp_ps" @input="tmp_ps">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="40">40</option>    
        </select>
        <div> {{ tmp_ps }} 개씩 출력합니다.</div>
        <div>
            <table>
                <thead>
                    <th v-for="item in this.column"> {{ item }}</th>
                </thead>
                <tbody>
                    <tr v-for="row in pagenatedData">
                        <td v-for="item in this.column">
                            <td v-if = "item == 'avatar'">
                                <img style="width: 80%;" :src = row[item] />
                            </td>
                            <td v-else>
                                <td style="font-size: 15px;" v-if = "item == 'uid' || item =='phone_number'">
                                     {{ row[item] }}</td>
                                <td v-else>{{ row[item] }}</td>
                            </td>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="btn-cover">
                <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">이전</button>
                <span class="page-count">{{ pageNum + 1 }} / {{ tmp_ps }} 페이지</span>
                <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">다음</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'paginated-list',

    data() {
        return {
            tmp_ps : 5,
            number : 0,
            bindingValue: this.default,
            pageNum: 0,
            perPageList: [
                {id: 1, value: 5,},
                {id: 2, value: 10},
                {id:3, value: 20},
                {id:4, value: 40}
            ],
            column: [
                'id', 'uid', 'password',
                'first_name', 'last_name', 'username',
                'email', 'avatar', 'gender',
                'phone_number',
            ],
            BASEURI: '',
            info: []
        }
    },
    mounted() {
        console.log("mounted")

    },
    created() {
        console.log("created")
        this.BASEURI = 'https://random-data-api.com/api/v2/users?size=20'
        axios.get(this.BASEURI)
            .then(result => {
                this.info = result.data
                console.log(result.data)
            })
            .catch(error => {
                console.log(error)
            })

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
            let listLen = this.info.length,
            listSize = this.pageSize,
            page = Math.floor(listLen / listSize);
        
            if (listLen % listSize > 0) page += 1;

            return page;
        },
        pagenatedData() {
            const start = this.pageNum * this.tmp_ps,
            end = start + this.tmp_ps;
            console.log(this.tmp_ps)
            return this.info.slice(start, end);
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
        getRouterParam(queryString) {
            let splited = queryString.split('?');
            let param = '';

            param = splited[1].split("=")[1]
            console.log(param)
            return param;
        }
    }
}
</script>

<style>
    h2 {
        text-align: center;
        color: darkblue;
    }
    table{
        width: 30px;
        text-align: left;
    }
    table th{
        padding: 12px;
        border-bottom: 2px solid darkblue;
    }
    table tr:nth-of-type(even) {
        background-color: rgba(0,0,255,0.1);
    }
</style>