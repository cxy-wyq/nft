<template>
  <div>
    <div class="context">
      <div>
        <img class="logo" src="@/assets/logo.png">
      </div>
      <div>
        <div class="title">Gmatrixs</div>
        <p>Gmatrixs Group</p>
      </div>
      <div>
        <div class="title">Support</div>
        <p>Whitepaper</p>
        <router-link to="/faq">
          <p>FAQ</p>
        </router-link>
        <p>Governance</p>
        <p>Contributors</p>
        <p>Strategic Partners</p>
        <p>Litepaper</p>
      </div>
      <div>
        <div class="title">Team</div>
        <p>About</p>
        <p>Join us</p>
      </div>
      <div>
        <div class="title">Follow us</div>
        <p>
          <a href="https://twitter.com/" target="_blank">
            <img class="app" src="@/assets/twitter.png">
          </a>
        </p>
        <p>
          <a href="https://www.facebook.com/" target="_blank">
            <img class="app" src="@/assets/facebook.png">
          </a>
        </p>
        <p>
          <a href="https://telegram.org/" target="_blank">
            <img class="app" src="@/assets/telegram.png">
          </a>
        </p>
      </div>
      <div>
        <div class="title">Developers</div>
        <p>
          <br>
        </p>
        <p>
          <a href="https://github.com/" target="_blank">
            <img class="app" src="@/assets/github.png">
          </a>
        </p>
      </div>
    </div>
    <div class="explain">
      Coyright © 2021 Dimensional
    </div>
  </div>

</template>
<style scoped>
.context {
  background: #000;
  width: 100vw;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 16px;
  font-weight: 400;
  padding: 111px 0 141px 0;
}
.logo {
  margin-top: -40px;
  width: 10.32vw;
}

p {
  margin-bottom: 20px;
  opacity: 0.7;
}
.title {
  color: #ffffff;
  margin-bottom: 28px;
  font-size: 16px;
  font-weight: 800;
}
.explain {
  width: 100vw;
  background: #f2b21b;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  padding: 31px 0;
  text-align: center;
}
a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
}

.app {
  width: 1.35vw;
  height: 1.35vw;
}
</style>