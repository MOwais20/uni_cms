<template>
  <v-container fluid class="pa-0 h-full">
    <v-row class="h-full" dense>
      <v-col cols="12" md="6" lg="6" xl="6" v-if="!$vuetify.breakpoint.mobile">
        <v-img
          height="100vh"
          src="/images/uni_front.png"
          lazy-src="/images/uni_front.png"
          class="rounded-sm"
          alt="uni_login_banner"
        />
      </v-col>

      <v-col cols="12" lg="6" xl="6" align-self="center" align="center">
        <v-card outlined rounded="xl" class="pa-5" flat max-width="500">
          <!-- logo -->
          <v-img
            contain
            height="150"
            src="/UniLogo.png"
            lazy-src="/UniLogo.png"
            alt="uni_login_banner"
          />

          <v-form ref="loginForm">
            <v-text-field
              v-model="loginData.username"
              outlined
              label="Username"
            ></v-text-field>

            <v-text-field
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="showPass ? 'text' : 'password'"
              hint="At least 8 characters"
              v-model="loginData.password"
              counter
              @click:append="showPass = !showPass"
              outlined
              label="Password"
            ></v-text-field>

            <v-btn
              @click="login"
              :loading="loader"
              block
              rounded
              height="50"
              depressed
              color="primary"
            >
              Sign In
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'authpage',
  data: () => ({
    loader: false,
    loginData: {
      username: null,
      password: null,
    },
    showPass: false,
    rules: {
      required: (value) => !!value || 'Required.',
      min: (v) => v?.length >= 8 || 'Min 8 characters',
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),
  methods: {
    login() {
      if (this.$refs.loginForm?.validate()) {
        this.loader = true

        setTimeout(() => {
          this.loader = false
        }, 2000)

        this.$router.push('/')
      }
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
