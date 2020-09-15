<template>
  <div class="user-container">
    <div class="user-dashbord">
      <!-- logo -->
      <div class="logo-container">
        <img
          src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/logo_black_bottom@2x.png"
        />
      </div>

      <!-- icon -->
      <div>
        <div class="user-avatar">
          <img
            src="http://by-image.oss-cn-shanghai.aliyuncs.com/official-site/E2_Icon.jpg"
            class="user-avatar-icon"
          />
        </div>
        <div class="user-info">
          <h2 class="">非会员</h2>
        </div>
      </div>

      <!-- selection -->
      <div class="mine">
        <div
          class="chos-bg"
          @click="change('Session')"
          :style="{ backgroundColor: componentId == 'session' ? 'pink' : '' }"
        >
          <img
            src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-my-course.png"
          />
          <p>我的课程</p>
        </div>

        <div
          class="chos-bg"
          @click="change('Email')"
          :style="{ backgroundColor: componentId == 'Email' ? 'pink' : '' }"
        >
          <img
            src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-email.png"
          />
          <p>邮箱</p>
        </div>
      </div>

      <!-- bottom -->
      <div class="menu-bom">
        <div
          class="chos-bg"
          @click="change('Setting')"
          :style="{ backgroundColor: componentId == 'Setting' ? 'pink' : '' }"
        >
          <img
            src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-set.png"
          />
          <p>设置</p>
        </div>

        <div class="chos-bg">
          <img
            src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-quit.png"
          />
          <p>退出</p>
        </div>
      </div>
    </div>

    <Center :componentId="componentId" class="user-center"> </Center>
  </div>
</template>

<script>
import Center from "./Center";

export default {
  name: "Home",
  components: {
    Center
  },
  data() {
    return {
      componentId: "session"
    };
  },

  methods: {
    change(name) {
      this.componentId = name;
      console.log(name);
    }
  }
};
</script>

<style>
.user-container {
  display: flex;
  width: 100%;
  height: 100vh;
}
.user-dashbord {
  display: inline-block;
  vertical-align: top;
  width: 15.6vw;
  height: 100vh;
  min-height: 768px;
  background-color: #141c3b;
  position: fixed;
  left: 0;
  top: 0;
  min-width: 160px;
  z-index: 2;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
}
.user-center {
  vertical-align: top;
  width: 100%;
  min-height: 600px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  padding-left: 15.6vw;
  position: relative;
}
.logo-container {
  text-align: center;
  padding: 2vh 0 8.16vh;
}
.logo-container img {
  width: 146px;
  height: 43px;
  cursor: pointer;
}
.user-avatar {
  height: 78px;
  text-align: center;
}
.user-avatar-icon {
  width: 78px;
  height: 78px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}
.user-info {
  text-align: center;
  word-wrap: break-word;
  word-break: break-all;
  padding: 0.51vh 0 8.16vh;
}
.user-info h2 {
  font-size: 14px;
  font-weight: 300;
  color: #e8e8e8;
  line-height: 25px;
  margin: 0;
  padding: 1px 0;
}
.chos-bg {
  display: flex;
  align-items: center;
  height: 54px;
  justify-content: center;
  cursor: pointer;
}
.chos-bg img {
  width: 22px;
  height: 22px;
  margin-right: 9px;
}
.chos-bg p {
  color: #e8e8e8;
  font-weight: 300;
  line-height: 54px;
  width: 70px;
}
.menu-bom {
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  height: 108px;
}
.chos-bg:hover {
  background-color: rgb(167, 159, 194);
}
</style>
