<template>
    <div>
        <div>
            console 창을 확인해보세요
        </div>
        <input type="text" v-model="nickname"/>
        <div>
            {{ nickname }}
        </div>
        <div v-if="nickname.length > 0 && nickname.length <= 10">
            {{ sentence }}
        </div>
        <div v-else-if="nickname.length > 10">
            별명은 10자 이하로 입력해주세요
        </div>
        <div v-else>
            입력창을 입력해보세요
        </div>
        <div>SUM : {{ sum(1, 2) }}</div>
        <div>FACTORIAL : {{ factorial(5) }}</div>
        <div>
            v-for
            <span v-for="item in numbers">{{ item }}&nbsp;</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nickname: "",
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
    computed: {
        sentence() {
            return `당신의 별명은 ${this.nickname} 입니다.`
        }
    },
    methods: {
        sum(a, b) {
            return a + b;
        },
        factorial(n) {
            if (n > 1) {
                return n * this.factorial(n-1)
            }
            else return 1;
        },
    },
    watch: {
        nickname() {
            console.log("nickname updated")
        },
        sentence() {
            console.log("sentencce updated")
        }
    },
    unmounted() {
        console.log("unmounted")
    }
}
</script>