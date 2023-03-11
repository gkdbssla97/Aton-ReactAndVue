<template>
    <div>
        <h2>
            Login
        </h2>
        <input type="text" @input="id = $event.target.value" placeholder="이메일을 입력해주세요" />
        <div>
            {{ id }}
        </div>
        <input type="password" @input="password = $event.target.value" @keypress="($event) => pressEnter($event)"
            placeholder="패스워드를 입력해주세요" />
        <div>
            {{ password }}
        </div>

        <button @click="login">LOG IN</button>
    </div>
</template>

<script>
import admin from "@/data_files/admin.json"
import user from "@/data_files/user.json"
import product from "@/data_files/product.json"

export default {
    data() {
        return {
            nickname: "",

            id: "",
            password: "",
            getAdmin: admin,
            getUSer: user,

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
        getAdmin() {
            return admin.map((item) => {
                return item
            });
        },
        getUser() {
            return user.map((item) => {
                return item
            });
        },
        sentence() {
            return `당신의 별명은 ${this.nickname} 입니다.`
        }
    },
    methods: {
        pressEnter(e) {
            console.log("1313")
            if (e.keyCode === 13) {
                this.login()
                console.log("1313")
            }
        },
        login() {
            let flag = false;
            this.getUser.map((item, idx) => {
                if (item.email === this.id && item.password === this.password) {
                    flag = true;
                }
            });
            if (flag) {
                console.log("id/pwd 일치")
                this.$router.push('admin')
            } else {
                console.log("id/pwd 불일치")
                flag = false;
            }
            console.log(this.id);
            console.log(this.password);
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