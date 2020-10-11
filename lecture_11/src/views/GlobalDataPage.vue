<template>
    <div class="main-page">
        <ul v-if="users.length">
            <UserListItem v-for="user in users" v-bind:user="user"/>
        </ul>
        <p v-else-if="loading">Loading...</p>
        <p v-else>An error has occured</p>
    </div>
</template>

<script>
import UserListItem from '@/components/UserListItem.vue'
export default {
    components: {
        UserListItem
    },
    data() {
        return {
            loading: true,
            users : []
        }
    },
    mounted() {
        fetch("https://api.github.com/users")
        .then(response => (response.ok ? response.json() : Promise.reject()))
        .then(response => {
            this.users = response
            this.loading = false})
        .catch(() => this.loading = false)
    }
}
</script>