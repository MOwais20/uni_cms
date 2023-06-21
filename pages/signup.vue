<!-- <template>
  <section class="columns-2 h-full">
    <div>
      <img
        class="bannerLogin"
        src="@/static/images/uni_front.png"
        alt="uni_login_banner"
      />
    </div>
    <div class="flex flex-col h-full items-center justify-center">
      <form
        action="
        "
      >
        <div class="flex flex-col h-full items-center justify-center">
          <label for="registration_number">Registration Number</label>
          <input type="text" />
        </div>
      </form>
    </div>
  </section>
</template>


  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
-->

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

      <v-col align="center">
        <v-img
          align
          center
          height="200px"
          width="169px"
          src="/images/Ellipse 1.png"
          alt="uni_login_banner"
        />

        <div>
          <p class="fp_design">Forgot Password?</p>
          <p class="reset_design">You can reset your password here</p>
        </div>

        <form>
          <v-text-field
            v-model="name"
            class="Form_line"
            label="Registration No"
            required
          ></v-text-field>

          <div class="">
            <v-btn class="btn_sub" @click="login" depressed color="primary">
              Send Email
            </v-btn>

            <v-text-field
              v-model="name"
              class="Form_line_2"
              label="Back to login"
              required
            ></v-text-field>
          </div>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script></script>

<style>
.reset_design {
  width: 404px;
  height: 47px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.48);
}
.fp_design {
  width: 402px;
  height: 68px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-transform: uppercase;
  color: #000000;
}
.Form_line {
  width: 380px;
  height: 58px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
  text-align: center;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.48);
}
.btn_sub {
  width: 161px;
  height: 58px;
  background: primary;
  border-radius: 50px;
}
.Form_line_2 {
  box-sizing: border-box;
  width: 225px;
  height: 36px;
  background: #ffffff;
}
</style>
