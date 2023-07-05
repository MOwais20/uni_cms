<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <div class="d-flex flex-column align-center">
          <v-avatar size="156" color="primary">
            <v-icon dark size="150">mdi-account</v-icon>
          </v-avatar>
          <h1 class="pa-5 pb-2 font-weight-bold text-3xl">Ahmed Raza</h1>

          <h3 class="mb-5">Today is {{ $moment().format('LL') }}</h3>
        </div>
        <v-divider inset></v-divider>
        <v-container>
          <v-row dense>
            <v-col>
              <v-btn class="primary lighten-3" x-large icon fab color="white">
                <v-icon size="40">mdi-calendar-month-outline</v-icon>
              </v-btn>
              <h3>Time Table</h3>
            </v-col>

            <v-col>
              <v-btn class="primary lighten-3" x-large icon fab color="white">
                <v-icon size="40">mdi-google-classroom</v-icon>
              </v-btn>
              <h3>Classroom</h3>
            </v-col>

            <v-col>
              <v-btn class="primary lighten-3" x-large icon fab color="white">
                <v-icon size="40">mdi-timeline-check-outline</v-icon>
              </v-btn>
              <h3>Attendance</h3>
            </v-col>

            <v-col>
              <v-btn class="primary lighten-3" x-large icon fab color="white">
                <v-icon size="40">mdi-book-account</v-icon>
              </v-btn>
              <h3>Course</h3>
            </v-col>

            <v-col>
              <v-btn class="primary lighten-3" x-large icon fab color="white">
                <v-icon size="40">mdi-account-credit-card</v-icon>
              </v-btn>
              <h3>Finance</h3>
            </v-col>
          </v-row>
        </v-container>

        <v-card flat outlined height="500" rounded="xl" class="grey lighten-3">
          <v-card-text> </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style></style>
