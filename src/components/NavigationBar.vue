<template>
  <div>
    <div class="main">
      <div class="logoflex">
        <img class="logo" src="@/assets/logo.png">
      </div>
      <div class="context">
        <router-link to="/">
          <div>
            Home
          </div>
        </router-link>
        <div>
          NFT
        </div>
        <div>
          NEWS
        </div>
        <div>
          <router-link to="/TOKEN">
            <div>
              TOKEN
            </div>
          </router-link>
        </div>
        <router-link to="/FAQ">
          <div>
            FAQ
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  width: 100vw;
  display: flex;
  height: 8rem;
  background: rgba(0, 0, 0, 0.3);
  flex-wrap: wrap;
}
.logoflex {
  display: flex;
  align-items: center;
}
.logo {
  height: 7rem;
}
.context {
  display: flex;
  color: #ffffff;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  font-size: 1.4rem;
  flex-grow: 1;
}
a {
  color: #ffffff;
  text-decoration: none;
}
</style>