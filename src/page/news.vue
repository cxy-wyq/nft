<template>
  <div>
    <NavigationBar class="nab" />
    <div class="top">
      <div class="textdiv">
        <div class="titles">
          Information
        </div>
        <div class="titles">
          It's a news headline.
        </div>
        <div>
          Blockchain, a distributed database system, originated from bitcoin ... ...
        </div>
        <div>
          2022.4.10
        </div>
      </div>
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
  },
}
</script>
<style scoped>
.nab {
  position: absolute;
}
.top {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)),
    url("../static/news/bg.png");
  min-width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex-direction: column;
}
.top .textdiv {
  display: flex;
  /* height: 100%; */
  flex-direction: column;
  align-items: space-around;
  justify-content: space-between;
  margin: 5rem;
  min-height: calc(100vh - 8rem);
  margin-top: 8rem;
  font-size: 1rem;
  color: #fff;
}
.textdiv .titles {
  font-size: 3rem;
  font-weight: 400;
}
</style>