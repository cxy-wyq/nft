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
  padding: 3vh 0 8vh 0;
  color: #ffffff;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.logo {
  margin-top: -1rem;
  width: 9rem;
}
p {
  margin: 1vh 0;
  opacity: 0.7;
}
.title {
  opacity: 1;
  margin: 2vh 0;
}
.explain {
  width: 100vw;
  background: #f2b21b;
  color: rgba(255, 255, 255, 0.7);
  padding: 3vh 0;
  text-align: center;
}
a {
  color: #ffffff;
  text-decoration: none;
}
.app {
  width: 1rem;
  height: 1rem;
}
</style>