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
        <div class="day">
          2022.4.10
        </div>
      </div>
    </div>
    <div class="main">
      <div class="news" @click="$router.push({path:'/shownew'})">
        <div class="title">It's a news headline.</div>
        <div class="day">2021/4/23</div>
        <div>Blockchain, a distributed database system, originated from bitcoin and was first proposed by satoshi
          nakamoto in his paper ... ...</div>
      </div>
      <div class="news" @click="$router.push({path:'/shownew'})">
        <div class="title">It's a news headline.</div>
        <div class="day">2021/4/23</div>
        <div>Blockchain, a distributed database system, originated from bitcoin and was first proposed by satoshi
          nakamoto in his paper ... ...</div>
      </div>
      <div class="news" @click="$router.push({path:'/shownew'})">
        <div class="title">It's a news headline.</div>
        <div class="day">2021/4/23</div>
        <div>Blockchain, a distributed database system, originated from bitcoin and was first proposed by satoshi
          nakamoto in his paper ... ...</div>
      </div>
      <div class="news" @click="$router.push({path:'/shownew'})">
        <div class="title">It's a news headline.</div>
        <div class="day">2021/4/23</div>
        <div>Blockchain, a distributed database system, originated from bitcoin and was first proposed by satoshi
          nakamoto in his paper ... ...</div>
      </div>
      <div class="news" @click="$router.push({path:'/shownew'})">
        <div class="title">It's a news headline.</div>
        <div class="day">2021/4/23</div>
        <div>Blockchain, a distributed database system, originated from bitcoin and was first proposed by satoshi
          nakamoto in his paper ... ...</div>
      </div>
    </div>
    <div class="pagination">
      <div>
        total 12 items
      </div>
      <Pagination layout="prev, pager, next" :total="50">
      </Pagination>
      <div>
        Go to
      </div>
    </div>
    <Base />
  </div>
</template>
<script>
import NavigationBar from "@/components/NavigationBar.vue"
import Base from "@/components/Base.vue"
import { Pagination } from 'element-ui';
export default {
  components: {
    NavigationBar,
    Base,
    Pagination
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
  justify-content: space-between;
  margin: 5rem;
  margin-top: 8rem;
  font-size: 1rem;
  color: #fff;
}
.textdiv .titles {
  font-size: 3rem;
  font-weight: 400;
  margin: 2rem 0;
}
.textdiv .day {
  background: #000;
  width: 6rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  box-shadow: 0 0 10px 10px #000;
}
.main {
  background: #000;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
}
.news {
  background: linear-gradient(89deg, #505050 0%, rgba(0, 0, 0, 0) 100%);
  width: 80vw;
  margin: 1rem 0;
  color: #ffffff;
  padding: 1rem;
  font-size: 0.3rem;
}
.news .title {
  font-size: 2rem;
}
.news .day {
  margin: 1rem 0;
  font-size: 1rem;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  padding: 2rem 0;
  color: #3e3e3e;
  font-size: 1rem;
}
</style>
<style>
.el-pagination .btn-next,
.el-pagination .btn-prev {
  background: rgba(134, 134, 134, 0.2);
  color: #000;
}
.el-pagination button:disabled {
  background: rgba(134, 134, 134, 0.2);
  color: #000;
}
.el-pager li {
  color: #311c40;
  background: #000;
}
</style>