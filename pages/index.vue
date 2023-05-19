<template>
  <div>
    <div class="flex flex-col">
      <div class="" id="app">
        <img class="Rectangle" src="./images.src/Rectangle 6.png" />
        <div class="black">
          Welcome To <br />
          SHU
        </div>
      </div>


      <div class="container">

        <a href=""><div id="box1" class="Box-radius">
          <div class="main">
          <div>
            <img src="./images.src/Vector.png" alt=""></div>
            <div class="portal">Student portal</div>
        </div>
      </div></a>
       

        <a href=""><div id="box2" class="Box-radius">
          <div class="main">
          <div>
            <img src="./images.src/faculty.png" alt=""></div>
            <div class="portal">Faculty portal</div>
        </div>
      </div></a>


        <a href=""><div id="box3" class="Box-radius">
          <div class="main">
          <div>
            <img src="./images.src/parents.png" alt=""></div>
            <div class="portal">Parents portal</div>
        </div>
      </div></a>


        <a href=""><div id="box4" class="Box-radius">
          <div class="main">
          <div>
            <img src="./images.src/finance.png" alt=""></div>
            <div class="portal">Fiance portal</div>
        </div>
      </div></a>
        
      </div>
    </div>

    <div>
      <link rel="stylesheet" href="" />
    </div>
  </div>

  

  <!-- <h1 class="text-3xl font-bold underline">Hello world!</h1>

  <div class="ey">fggrgrg </div>  -->
</template>

<script></script>

<style scoped>
.Rectangle {
  width: 100%;

}
.black {
  position: absolute;
  width: 100%;
  height: 270px;
  bottom: 47%;
  background: rgba(0, 0, 0, 0.24);
  height: 212px;  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;

}
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.main{
  
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
