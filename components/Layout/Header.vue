<template>
  <v-app-bar color="transparent" elevation="0" absolute>
    <v-spacer></v-spacer>
    <v-btn @click="logout" depressed text dark color="white">
      <v-icon class="mr-2">mdi-logout</v-icon> Sign Out
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$router.push('/login')
    },
  },
}
</script>

<style></style>
