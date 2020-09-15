<template>
  <div>
    <!--  -->

    <!--  -->

    <!-- title -->
    <div class="nav-title">
      <div class="tohome">
        <img
          src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/ic_fanhui_jiashi.svg"
          style="margin-right: 20px"
        />
        <span>返回首页</span>
      </div>
      <p>我的课程</p>
    </div>
    <!--  -->

    <!--  -->

    <!-- main -->
    <keep-alive>
      <component :is="componentId" class="component"></component>
    </keep-alive>
  </div>
</template>

<script>
import Setting from "./Setting";
import Email from "./Email";
import Session from "./Session";
export default {
  name: "Center",
  components: {
    Setting,
    Email,
    Session
  },
  props: {
    componentId: {
      type: String
    }
  }
};
</script>
<style>
.nav-title {
  height: 56px;
  padding: 0 40px;
  background: #fff;
  box-shadow: 5px 6px 4px rgba(213, 209, 209, 0.5);
  position: fixed;
  top: 0;
  left: 15.6vw;
  right: 0;
  z-index: 9999;
  display: flex;
  color: #707070;
  line-height: 56px;
  cursor: pointer;
  overflow: hidden;
}
.tohome {
  line-height: 56px;
  margin-right: 30px;
  margin-left: -20px;
  cursor: pointer;
}
.course-list {
  width: 60vw;
  margin: 0 auto;
  padding: 80px 0 120px;
}
.component {
  width: 60vw;
  margin: 0 auto;
  padding: 136px 0 120px;
}
</style>
