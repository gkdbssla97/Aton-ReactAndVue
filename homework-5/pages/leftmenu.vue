<template>
    <div>
        <div>
            <table>
                <thead>
                    <th> MENU </th>
                </thead>
                <tbody>
                    <tr id="adminPage" style="height: 300px;" @click="goAdminPage"> admin&nbsp; page</tr>
                    <tr id="userPage" style="height: 300px;" @click="goUserPage"> user&nbsp; page</tr>
                    <tr id="productPage" style="height: 300px;" @click="goProductPage">product page</tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

export default {
    name: "leftMenu",
    name: 'paginated-list',

    data() {
        return {

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

    },
    computed: {

    },
    methods: {
        goAdminPage() {
            this.$router.push('admin')
        },
        goUserPage() {
            this.$router.push('user')
        },
        goProductPage() {
            this.$router.push('product')
        }
    }
}

</script>

<style>
h3 {
    text-align: left;
    color: darkblue;
}

table {
    width: 30px;
    text-align: left;
    padding-left: 150px;

}

table th {
    text-align: center;
    padding: 12px;
    background-color: #b5f7bb;
    border: 2px solid #04AA6D;

}

table tr {
    font-size: x-large;
    border: 2px solid #04AA6D;
    padding: 50px 20px;
    text-align: center;
    font-weight: bold;
    background-color: #5ce4271a;
    border-bottom: 2px solid #b9695e1a;
}
</style>