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
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.title {
  width: 70rem;
}
.context {
  margin-top: -5rem;
  display: flex;
  align-items: center;
}
.rectangles {
  width: 4rem;
  height: 4rem;
}
.rectangle {
  width: 6rem;
  height: 6rem;
}
.pancake {
  width: 20rem;
  padding-bottom: 8rem;
}
</style>