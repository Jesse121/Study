<template>
  <div id="app">
    <p class="rank-title"></p>
    <ul class="tab">
        <li v-for="(item,index) in 2" :key ={index} :class="['tab-'+index,{active:selected==index}]"  @click="exchangeTab(index)"><span></span></li>
    </ul>
    <div class="scroll-box" ref="scrollBox" @scroll="scrollLoad()">
    <ul class="prev-list">
        <li :class="'no'+(index+1)" v-for="(item,index) in prevList(rankList)" :key="index">
            <div class="avatar-wrap">
                <div class="crown"></div>
                <div class="live" v-if="isMod && item.isPlaying == 1"></div>
                <div class="avatar-box">
                    <img :src="item.headPic" class="avatar" v-if="isMod" @click="goPersonalPage(item.mid)">
                    <img :src="item.headPic" class="avatar" v-else @click="goPersonalPage(item.uid)">
                </div>
                <div class="v-icon" v-if="isMod && item.verified == 1"></div>
            </div>
            <div class="info">
                <p class="nickname">{{item.nickname}}</p>
                <p class="mid">ID {{item.mid}}</p>
                <p class="defeat" v-if="isMod">Defeat:100 people</p>
                <div class="received-num" v-if="isMod">
                    <span class="diamond"></span>
                    <span class="num">Won{{item.number}}</span>
                </div>
                <div class="points" v-else>2000 Points Gained</div>
                <div class="follow-btn following" v-show="item.isFollowing"></div>
                <div class="follow-btn nofollow" v-if="isMod" v-show="!item.isFollowing" @click="attention(item.mid,index)" ></div>
                <div class="follow-btn nofollow" v-else v-show="!item.isFollowing" @click="attention(item.uid,index)" ></div>
            </div>
        </li>
    </ul>
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
