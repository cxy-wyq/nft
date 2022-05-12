<template>
  <div>
    <NavigationBar class="nab" />
    <div class="main">
      <div class="top">
        <div class="left">
          home>Information centres><span>It's a news headline</span>
        </div>
        <div class="right">
          <img src="@/assets/share.png" />
          share
        </div>
      </div>
      <div class="new">
        <div class="title">
          It's a news headline.
        </div>
        <div class="day">
          Mar 25, 2021 GMT+08:10
        </div>
        <div class="new_context">
          Blockchain, a distributed database system, originated from bitcoin and was first proposed by satoshi
          nakamoto in his paper bitcoin: a peer-to-peer electronic cash system (Chinese version) in 2008. PDF link
          directly on the official website Blockchain is a distributed ledger that connects data blocks in chronological
          order and ensures that they cannot be tampered with or falsified in a cryptographic way.😀 Blockchain is
          divided into public chain, alliance chain and private chain. Public chain:Everyone can read data, send and
          confirm transactions, and compete for the blockchain of billing. No individual or institution can control or
          tamper with data unless more than 51% of the computing power is mastered, so the "public chain" is considered
          to be "completely decentralized". The public chain generally encourages the nodes to compete for bookkeeping
          through the token mechanism. BTC and ETH are both typical public chains. League chain: Blockchain refers to a
          blockchain managed by several institutions, each of which runs one or more nodes and records transaction data
          together. Data is only read, written and transmitted between institutions in the system. The data on the chain
          is distributed in a partial sense, and we regard it as "multi-center". Typical representative includes R3,
          Hyperledger, gold chain alliance to wait. Private chain: Each node participating in the system needs to be
          licensed, such as the user of a specific institution, and the access and use of data are strictly managed by
          the authority. Some license chains do not have a token mechanism because tokens are not needed to encourage
          nodes to compete for billing. No individual or institution can control or tamper with data unless more than
          51% of the computing power is mastered, so the "public chain" is considered to be "completely decentralized".
          The public chain generally encourages the nodes to compete for bookkeeping through the token mechanism. BTC
          and ETH are both typical public chains. League chain: Blockchain refers to a blockchain managed by several
          institutions, each of which runs one or more nodes and records transaction data together. Data is only read,
          written and transmitted between institutions in the system. The data on the chain is distributed in a partial
          sense, and we regard it as "multi-center". Typical representative includes R3, Hyperledger, gold chain
          alliance to wait.
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
.main {
  background: #000;
  color: #fff;
  padding: 0 5rem;
  min-height: 70vh;
}
.top {
  margin-top: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f2b21b;
  padding: 1rem 0;
}
.left {
  color: rgba(255, 255, 255, 0.5);
}
.left span {
  color: #fff;
}
.right {
  display: flex;
  align-items: center;
}
.right img {
  height: 2rem;
}
.title {
  font-size: 2rem;
  font-weight: 500;
  margin-top: 2rem;
}
.day {
  margin: 2rem 0;
  font-size: 1.3rem;
}
.new_context {
  font-size: 1rem;
  margin-bottom: 8rem;
}
</style>