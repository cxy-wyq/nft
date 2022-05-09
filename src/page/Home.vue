<template>
  <div>
    <NavigationBar class="nab" />
    <div class="area_1">
      <img src="@/static/index/title.png" class="title" />
      <div class="context">
        THE DIMENSIONAL DAO ALLIANCE IS A DECENTRALIZED JOINT CREATION COMMUNITY COMPOSED OF FANS/ FANS WHO LIKE THE
        SECOND DIMENSION IN THE WORLD
      </div>
      <div class="logo">
        <img class="app" src="@/assets/telegram.png">
        <img class="app" src="@/assets/twitter.png">
        <img class="app" src="@/assets/facebook.png">
        <img class="app" src="@/assets/github.png">
      </div>
    </div>
    <div class="area_2">
      <div class="top">
        <div class="title">
          ABOUT DIMENSIONAL
        </div>
        <div class="maintitle">
          <div class="line"></div>
          ABOUT DIMENSIONAL
          <div class="line"></div>
        </div>
        <div class="rectangleflex">
          <img src="@/static/token/rectangles.png" class="rectangles" />
          <img src="@/static/token/rectangle.png" class="rectangle" />
          <img src="@/static/token/rectangles.png" class="rectangles" />
        </div>
      </div>
      <div class="context">
        <div class="rectangleflex">
          <img src="@/static/token/rectangles.png" class="rectangles" />
          <img src="@/static/token/rectangles.png" class="rectangles" />
        </div>
        Committed to the refined development of DAO, in the metaverse world for your favorite two-dimensional IP
      </div>
      <div>
        <div class="context">
          <div class="rectangleflex">
            <img src="@/static/token/rectangles.png" class="rectangles" />
            <img src="@/static/token/rectangles.png" class="rectangles" />
          </div>
          Included in Won Woo
          <br>
          On-site support, Metaverse creation, fan meeting and other activities were carried out.
        </div>
      </div>
    </div>
    <div class="area_3">
      <img class="logo" src="@/static/index/title2.png">
      <div class="rectangleflex">
        <img src="@/static/token/rectangles.png" class="rectangles" />
        <img src="@/static/token/rectangle.png" class="rectangle" />
        <img src="@/static/token/rectangles.png" class="rectangles" />
      </div>
      <div class="context">
        In addition, the stand-alone chain supports Ethereum Virtual Machines (EVM) in its own verifier pool to share
        Ethereum security. In general, it applies to the verifier pool that can be completely decentralized and secure.
        Based on Ethereum, Dimensional has built a modular, universal and flexible blockchain game framework to provide
        support for middleware technology, release of game assets, transaction of game props, traffic ecology sharing,
        asset trading on the chain, platform arena and other functions.
      </div>
      <img src="@/assets/bottom.png">
      <div class="feature">
        <div class="feature_item">
          <div>
            <img src="@/assets/twitter.png">
          </div>
          <div class="feature_name">speciality</div>
          <div>The most professional development team</div>
        </div>
        <div class="feature_item">
          <div>
            <img src="@/assets/twitter.png">
          </div>
          <div class="feature_name">safety</div>
          <div>Dedicated to user virtual currency account security considerations</div>
        </div>
        <div class="feature_item">
          <div>
            <img src="@/assets/twitter.png">
          </div>
          <div class="feature_name">Fast</div>
          <div>Create faster block chain network applications</div>
        </div>
      </div>
    </div>
    <div class="area_4">
      <div class="main">
        <div class="title">DIMENSIONAL TECHNOLOGY DESCRIPTION</div>
        <div class="orthogon"></div>
        <div class="context">
          <li>About SDK</li>
          <div>
            The abbreviation for middleware is SDK. The SDK provided by DIM includes user wallets, blockchain browser
            interfaces, authentication signatures, anti-cheat modules, Websockets and events, Solidity + Ethereum
            Virtual
            Machines, transfer gateway integration, and more functions.
          </div>
        </div>
        <div class="context">
          <li>SDK Technical Description</li>
          <div>
            Middleware is an independent system software or service program that distributed applications use to share
            resources between different technologies. The benefits of Gmatrixs SDK middleware to game applications are
            not
            only simple access, shorten access cycle, but also provide chain maintenance, contract writing and resource
            management. The SDK interface provided by Gmatrixs allows developers to quickly develop blockchain-based
            games.
          </div>
        </div>
      </div>
    </div>
    <div class="area_5">
      <div class="main">
        <div class="title">DIMENSIONAL TECHNOLOGY DESCRIPTION</div>
        <div class="orthogon"></div>
        <div class="explain">
          Dimensional provides technical and innovative solutions to game development companies.
        </div>
        <div class="contetx">
          <div class="contetx_left">
            <div>

            </div>
            <div class="context_title">
              SDK multi-chain integration
            </div>
            <div class="context_main">
              The SDK integration multiple chains provide by DIM(ETH/BSC/HECO) uses the same procedure of access from
              ftraditional SDK,thus no additional learning costs.
            </div>
          </div>
          <div class="contetx_right">
            <div>

            </div>
            <div class="context_title">
              Decentralized server framework
            </div>
            <div class="context_main">
              Middleware is an independent system software or service program that distributed applications use to share
              resources between different technologies. The benefits of Dimensional SDK middleware to game applications
              are not only simple access.
            </div>
          </div>
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
  }
}
</script>
<style scoped>
.nab {
  position: absolute;
}
.area_1 {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)),
    url("../static/index/bg1.png");
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.area_1 .title {
  width: 40rem;
  margin-bottom: -2rem;
}
.area_1 .context {
  width: 80rem;
  color: #fff;
  text-align: center;
  font-size: 1.3rem;
}
.area_1 .logo {
  margin: 5rem 0;
}
.logo img {
  margin: 0 2rem;
}
.area_2 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)),
    url("../static/index/bg2.jpg");
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.area_2 .title {
  font-size: 4.5rem;
  margin-top: 2rem;
  color: #ffffff;
  text-shadow: 0px 3px 20px #438dee;
  opacity: 0.27;
  text-align: center;
}
.area_2 .maintitle {
  font-size: 3.5rem;
  color: #ffffff;
  text-shadow: 0px 3px 20px #f2b21b;
  opacity: 1;
  text-align: center;
  display: flex;
  align-items: center;
}
.area_2 .line {
  width: 321px;
  height: 8px;
  margin: 0 10px 0 10px;
  border-radius: 1px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
.area_2 .context {
  color: #fff;
  text-align: center;
  margin: 4rem 0;
}
.rectangleflex {
  text-align: center;
}
.rectangles {
  width: 2rem;
  height: 2rem;
}
.rectangle {
  width: 2rem;
  height: 2rem;
  margin: 0 -1rem;
}
.top {
  margin-bottom: 4rem;
}
.area_2 .context .rectangleflex .rectangles {
  margin: 0 -0.5rem;
}
.area_3 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #000;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.area_3 .rectangleflex {
  margin-top: -6rem;
}
.area_3 .context {
  color: #fff;
  width: 70vw;
  text-align: center;
  margin: 4rem 0;
}
.feature {
  display: flex;
  width: 80rem;
  justify-content: center;
}
.feature_item {
  width: 20%;
  display: flex;
  justify-content: top;
  text-align: center;
  color: #fff;
  flex-direction: column;
  margin: 5rem 0;
}
.feature_name {
  margin: 1rem 0;
}
.area_4 {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)),
    url("../static/index/bg3.jpg");
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #fff;
}
.main {
  width: 80%;
  margin: 4rem auto;
}
.main .title {
  font-size: 3rem;
  margin: 4rem 0 3rem 0;
}
.area_4 .main .orthogon {
  width: 22rem;
  height: 10px;
  background: #ffffff;
  opacity: 1;
  border-radius: 0px;
}
.area_4 .main .context li {
  margin: 3rem 0;
  font-size: 2rem;
}
.area_5 {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #000;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #fff;
}
.area_5 .main .orthogon {
  width: 182px;
  height: 10px;
  background: #f2b21b;
  margin: auto;
}
.explain {
  text-align: center;
  margin: 3rem 0;
}
.area_5 .context {
  display: flex;
}
</style>