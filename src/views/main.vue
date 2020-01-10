<template>
  <div class="main" onscroll="scroll">
    <div class="bgimg-1 w3-display-container w3-opacity-min">
      <div class="w3-display-middle page1">
        <h2>
          工作回顾
        </h2>
        <h2>
          问题与收获
        </h2>
        <h2>
          下步计划
        </h2>
      </div>
    </div>
    <div class="w3-content w3-container w3-padding-64">
      <h3 class="w3-center">工作回顾</h3>
      <p>自今年八月份来到公司，大概负责或接触过以下项目：园区大屏、园区后台管理、军民融合项目、数据开放平台管理系统、学区宝小程序、吴兴区事项聚合、宁海数据采集、绍兴数据开放平台、法人库、公司大屏项目等。</p>
      <p>我是非常热爱编程工作的人，在工作上面，能够正确认真的对待每一项工作，工作投入，在上班时间内，是非常聚精会神的，大家都知道我一直戴着降噪耳机
        ，就是为了让自己可以更全神贯注的做事情。
      </p>
      <p>在工作的过程中，会服从领导安排，并且积极和大家分享自己的见解，或者帮助新人在技术与工作流程上提供建议与指导。</p>
    </div>
    <div class="bgimg-2 w3-display-container w3-opacity-min">
      <div class="w3-display-middle">
        <span class="w3-xxlarge w3-wide" style="color: #fff">问题与收获</span>
      </div>
    </div>
    <div class="w3-content w3-container w3-padding-64">
      <h3 class="w3-center">遇到的问题</h3>
      <p>刚来的时候由于对业务和需求的不熟悉，有些项目接手的时候没有赶上评审会，或者是项目的轻重缓急不分等问题，
        专业技能上有很多需要学习的地方</p>
      <h3 class="w3-center">获得的提升</h3>
      <p>技术总是因为问题的出现，人们为了找到解决的方法而创造的。同样，个人能力也是因为解决问题的过程而获得提升。正是由于上面
        遇到的问题，我对业务的理解有了很高的进步，由于在工作中需要不断的去请教产品、UI、后端，我学习了很多除了前端之外的知识。
        由于需要和新人说明白，我需要在一些技术上去深究其原理，这也让我自己对一些知识点跟清楚。
      </p>
    </div>
    <div class="bgimg-3 w3-display-container w3-opacity-min">

    </div>
    <div class="bgimg-4 w3-display-container w3-opacity-min">
      <div class="w3-display-middle page2">
        <h3 class="w3-center">下步计划</h3>
      为公司开发一套和现在UI设计更加接近组件库<br />
      提升对前端技术的嗅觉灵敏度，保证公司技术在行业处于领先单位<br />
      提升自己的专业技术<br />
      提高自己的沟通技巧，和同事们相处更加融洽<br />
      </div>
    </div>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
.main {
  background: #fff;
  width: 100%;
  height: 100vh;
  overflow: auto;
  font-family: sans-serif;
  color: #777;
  line-height: 1.8;
}
.w3-opacity-min {
    opacity:0.75
}
.w3-display-middle {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.w3-tooltip, .w3-display-container {
    position:relative
}
.w3-content, .w3-auto {
    margin-left:auto;
    margin-right:auto
}
.w3-content {
    max-width:980px
}
.w3-padding-64 {
    padding-top:64px!important;
    padding-bottom:64px!important
}
.w3-container, .w3-panel {
    padding:0.01em 16px
}
.bgimg-1,
.bgimg-2,
.bgimg-3 {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bgimg-1 {
  background-image: url("../assets/images/bg1.jpeg");
  min-height: 100%;
}
.bgimg-2 {
  background-image: url("../assets/images/bg2.jpeg");
  min-height: 100%;
}
.bgimg-3 {
  background-image: url("../assets/images/bg3.jpeg");
  min-height: 100%;
}
.bgimg-4 {
  background-image: url("../assets/images/bg4.jpeg");
  min-height: 100%;
}
.w3-center {
    text-align:center!important
}
.w3-wide {
    letter-spacing:4px
}
.w3-xxlarge {
  font-size:36px!important
}
.page1 {
  // width: 400px;
  // text-align: center;
  background: rgba(255, 255, 255, .6);
  color: #333;
  padding: 25px 100px;
  // opacity: .5;
}
.page2 {
  width: 800px;
  // text-align: center;
  background: rgba(255, 255, 255, .1);
  color: #fff;
  padding: 25px 100px;
  // opacity: .5;
}
</style>