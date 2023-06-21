<template>
  <div>
    <div>
      <div class="relative">
        <img width="100%" height="500" src="../static/images/Rectangle.png" />
        <div class="absolute inset-y-2/4 black">
          Welcome To <br />
          SHU
        </div>
      </div>

      <div class="flex flex-row flex-wrap items-center justify-center">
        <nuxt-link
          v-for="(btn, index) in dashboardButtons"
          :to="btn.to"
          :key="`btn-${index + 1}`"
        >
          <div
            id="box1"
            class="flex flex-row justify-center items-center relative card__view"
          >
            <img
              v-if="index == 0"
              src="../static/images/Vector.png"
              :alt="btn.name"
            />

            <img
              v-else-if="index == 1"
              src="../static/images/faculty.png"
              :alt="btn.name"
            />

            <img
              v-else-if="index == 2"
              src="../static/images/parents.png"
              :alt="btn.name"
            />

            <img
              v-else-if="index == 3"
              src="../static/images/finance.png"
              :alt="btn.name"
            />
            <div
              class="absolute bottom-0 flex items-center justify-center cursor-pointer card__view__action"
            >
              <h3>{{ btn.name }}</h3>
            </div>
          </div>
        </nuxt-link>
        <!-- 
        <a href=""
          ><div id="box1" class="Box-radius">
            <div class="main">
              <div>
                <img src="./images/Vector.png" alt="" />
              </div>
              <div class="portal">Student portal</div>
            </div>
          </div></a
        > -->

        <!-- <a href=""
          ><div id="box2" class="Box-radius">
            <div class="main">
              <div>
                <img src="./images/faculty.png" alt="" />
              </div>
              <div class="portal">Faculty portal</div>
            </div>
          </div></a
        >

        <a href=""
          ><div id="box3" class="Box-radius">
            <div class="main">
              <div>
                <img src="./images/parents.png" alt="" />
              </div>
              <div class="portal">Parents portal</div>
            </div>
          </div></a
        >

        <a href=""
          ><div id="box4" class="Box-radius">
            <div class="main">
              <div>
                <img src="./images/finance.png" alt="" />
              </div>
              <div class="portal">Fiance portal</div>
            </div>
          </div></a
        > -->
      </div>
    </div>
  </div>

  <!-- <h1 class="text-3xl font-bold underline">Hello world!</h1>

  <div class="ey">fggrgrg </div>  -->
</template>

<script setup>
import { ref } from "vue";

const dashboardButtons = [
  {
    name: "Student portal",
    to: "/student",
    icon: "images/Vector.png",
  },
  {
    name: "Faculty portal",
    to: "/faculty",
    icon: "images/faculty.png",
  },
  {
    name: "Parents portal",
    to: "/parent",
    icon: "images/parents.png",
  },

  {
    name: "Finance portal",
    to: "/finance",
    icon: "images/finance.png",
  },
];
</script>

<style scoped>
.card__view {
  height: 300px;
  width: 270px;
  margin: 10px;
  background: rgba(237, 43, 42, 0.73);
  border-radius: 25px;
}

.card__view__action {
  width: 270px;
  height: 60px;
  background: #ed2b2a;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 25px;
}

.black {
  /* position: absolute; */
  width: 100%;
  height: 270px;
  

  background: rgba(0, 0, 0, 0.24);
  height: 210px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.Box-radius {
  height: 298px;
  margin: 10px;
  background: rgba(237, 43, 42, 0.73);
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
}

.portal {
  position: relative;
  top: 10pc;
  width: 266px;
  height: 74px;
  background: #ed2b2a;
  border-radius: 25px;
}
</style>
<!-- .pic1 {
  position: absolute;
  display: block;
  margin-left: auto;
  margin-right: auto;

  border-radius: 25px;
} -->
