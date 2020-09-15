var myMixin = {
  data() {
    return {
      message: "我是mixin的数据"
    };
  },
  methods: {
    hello: function() {
      console.log("hello from mixin!");
    }
  }
};

export default {
  myMixin
};
