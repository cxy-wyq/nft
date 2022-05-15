<template>
  <div>
    <NavigationBar class="nab" />
    <div class="main">
      <img src="@/static/token/title.png" class="title" />
      <div class="context">
        <img src="@/static/token/rectangles.png" class="rectangles" />
        <img src="@/static/token/rectangle.png" class="rectangle" />
        <img src="@/static/token/rectangles.png" class="rectangles" />
      </div>
      <img src="@/static/token/pancake.png" class="pancake" />
    </div>
    <Base />
  </div>
</template>
<script>
import NavigationBar from "@/components/NavigationBar.vue"
import Base from "@/components/Base.vue"
export default {
  components: {
    NavigationBar,
    Base
  }
}
</script>
<style scoped>
.nab {
  position: absolute;
}
.main {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)),
    url("../static/token/bg.png");
  background-color: #000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.title {
  width: 59.21vw;
  margin-top: 564px;
}
.context {
  display: flex;
  align-items: center;
  margin-top: -5.43vw;
}
.rectangles {
  width: 2.7vw;
  height: 2.7vw;
}
.rectangle {
  width: 3vw;
  height: 3vw;
  margin: 0 -1vw;
}
.pancake {
  width: 24.01vw;
  margin: 85px 0 218px 0;
}
</style>