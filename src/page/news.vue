<template>
  <div>
    <NavigationBar class="nab" />
    <div class="top">
      <div class="textdiv">
        <div class="row_1">
          Information
        </div>
        <div class="row_2">
          It's a news headline.
        </div>
        <div class="row_3">
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
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)),
    url("../static/news/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex-direction: column;
}
.top .textdiv {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  margin-left: 12.7vw;
}
.row_1 {
  font-size: 114px;
  font-weight: 400;
  margin: 380px 0 104px 0;
}
.row_2 {
  font-size: 67px;
  font-weight: 800;
}
.row_3 {
  font-size: 30px;
  font-weight: 400;
  margin: 41px 0 255px 0;
}
.textdiv .day {
  background: #000;
  font-size: 30px;
  font-weight: 400;
  height: 90px;
  width: 12.6vw;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 10px #000;
  margin: 0 0 136px 47px;
}
.main {
  background: #000;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.news {
  background: linear-gradient(89deg, #505050 0%, rgba(0, 0, 0, 0) 100%);
  color: #ffffff;
  width: 74.58vw;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 42px;
  padding: 70px 7.03vw 59px 1.35vw;
}
.news .title {
  font-size: 48px;
  font-weight: 800;
}
.news .day {
  font-size: 22px;
  font-weight: 800;
  margin: 2px 0 18px 0;
}
.pagination {
  font-size: 21px;
  font-weight: 400;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #3e3e3e;
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