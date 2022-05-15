<template>
  <div>
    <div class="main">
      <div class="logoflex">
        <img class="logo" src="@/assets/logo.png">
      </div>
      <div class="context">
        <div :class="$route.path=='/'?'page i':'page'">
          <router-link to="/">
            Home
          </router-link>
        </div>
        <div :class="$route.path=='/NTF'?'page i':'page'">
          <router-link to="/">
            NTF
          </router-link>
        </div>
        <div :class="$route.path=='/news'?'page i':'page'">
          <router-link to="/news">
            NEWS
          </router-link>
        </div>
        <div :class="$route.path=='/token'?'page i':'page'">
          <router-link to="/token">
            TOKEN
          </router-link>
        </div>
        <div :class="$route.path=='/faq'?'page i':'page'">
          <router-link to="/faq">
            FAQ
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  width: 100vw;
  display: flex;
  background: rgba(0, 0, 0, 0.3);
  flex-wrap: wrap;
}
.logoflex {
  display: flex;
  align-items: center;
  margin: 0 13.6vw 0 9.66vw;
}
.logo {
  width: 10vw;
}
.context {
  display: flex;
  color: #ffffff;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  font-size: 24px;
  font-weight: 400;
  flex-grow: 1;
}
a {
  color: #ffffff;
  text-decoration: none;
}
.page {
  height: 99%;
  display: flex;
  align-items: center;
}
.i {
  border-bottom: 1px solid #f2b21b;
}
</style>