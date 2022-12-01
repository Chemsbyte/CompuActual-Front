
<template>
    <div class="main">
        <div class="form">
                <div class="flex md6 lg4">
                    <va-card>
                        <va-card-title>Login</va-card-title>
                        <va-card-content>
                            <div class="form-content">
                                <va-form style="width: 90%;" tag="form" @submit.prevent="handleSubmit">
                                    <va-input label="Username" v-model="username" />
                                    <va-input class="mt-5" type="password" label="Password" v-model="password" />
                                    <va-button @click="click" type="submit" class=" btn-login mt-5">
                                        Login
                                    </va-button>
                                </va-form>
                            </div>
                        </va-card-content>
                    </va-card>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        click() {
            console.log(this.username);
            console.log(this.password);
        }
    },
}
</script>

<style lang="scss" scoped>
.main {
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .form {
        width: 50%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .btn-login {
            height: 1rem     ;
    }

    }
   
}
</style>