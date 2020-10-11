<template>
    <div class="main-page">
        <ul v-if="getUsers.length">
            <UserListItem v-for="user in getUsers" v-bind:user="user"/>
        </ul>
        <p v-else-if="getLoading">Loading...</p>
        <p v-else>An error has occured</p>
    </div>
</template>

<script>
import UserListItem from '@/components/UserListItem.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
    components: {
        UserListItem
    },
    computed: mapGetters(['getUsers', 'getLoading']),
    methods: mapActions(['fetchUsers']),
    mounted() {
        this.fetchUsers("https://api.github.com/users");
    }
}
</script>