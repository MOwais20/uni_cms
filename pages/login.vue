<template>
  <v-container fluid class="pa-0">
    <v-row dense>
      <v-col>
        <v-img
          height="100vh"
          src="/images/uni_front.png"
          alt="uni_login_banner"
        />
      </v-col>

      <v-col align-self="center" align="center">
        <v-card flat max-width="500">
          <!-- logo -->
          <!-- <v-img
          height="100vh"
          src="/images/uni_front.png"
          alt="uni_login_banner"
        /> -->

          <v-form>
            <v-text-field outlined label="Username"></v-text-field>

            <v-text-field outlined label="Password"></v-text-field>

            <v-btn @click="login" depressed color="primary"> Sign In </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- <section class="columns-2 h-full">
    <div
      class="flex flex-col py-20 mx-5 h-full text-left items-center justify-center"
    >
      <div class="text-center leading-7 mb-10">
        <h2 class="leading-7" style="font-weight: bold">STUDENT PORTAL</h2>
        <h3 class="leading-7">Enter your Registration No and Password</h3>
      </div>

      <v-form ref="form" lazy-validation>
        <v-row>
          <v-col cols="12">
            <v-text-field outlined label="Registration Number"></v-text-field>
          </v-col>
        </v-row>
      </v-form>

       <form
        class="h-full w-full mx-auto"
        action="
        "
      >
        <div class="flex flex-col h-full items-start justify-start">
          <label for="registration_number">Registration Number</label>
          <input type="text" />
        </div>

        <div class="flex flex-col h-full my-16 items-start justify-start">
          <label for="registration_number">Password</label>
          <input type="text" />
        </div>

        <button>Sign In</button>
      </form> 
    </div>
  </section> -->
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push('/')
    },
  },
}
</script>

<!-- <style lang="scss">
.bannerLogin {
  height: 100vh;
  width: 100%;
  object-fit: cover;
}

label {
  text-align: left;
  color: #0000007a;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
}

input {
  border-bottom: 2px solid black;
  padding: 8px;
  display: block;
  width: 100%;
}

button {
  width: 150px;
  height: 48px;
  color: white;
  background: #ed2b2a;
  border-radius: 50px;
}
</style> -->
