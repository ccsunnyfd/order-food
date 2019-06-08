<template>
  <div id="pcontent">
    <router-link to="/home">
      <div class="back">返回</div>
    </router-link>

    <!-- 获取图片路径需要时间，如果不加判断，会有404路径undefined错误,文字不需要发送get请求，所以看不出来 -->
    <div v-if="flag" class="p_content">
      <div class="p_info">
        <img :src="api + list.img_url" />
        <h2>{{ list.title }}</h2>
        <p class="price">{{ list.price }}/份</p>
      </div>
      <div class="p_detial">
        <h3>
          商品详情
        </h3>
        <div class="p_content" v-html="list.content"></div>
      </div>
    </div>

    <footer class="pfooter">
      <div class="cart">
        <strong>数量:</strong>
        <div class="cart_num">
          <div class="input_left" @click="decNum()">-</div>
          <div class="input_center">
            <input
              type="text"
              readonly="readonly"
              v-model="num"
              name="num"
              id="num"
            />
          </div>
          <div class="input_right" @click="incNum()">+</div>
        </div>
      </div>

      <button class="addcart" @click="addCart()">
        加入购物车
      </button>
    </footer>
  </div>
</template>


<script>
//引入config

import Config from "../model/config.js";

import storage from "../model/storage.js";
export default {
  data() {
    return {
      api: Config.api,
      list: [],
      num: 1,
      flag: false
    };
  },
  methods: {
    requestData(id) {
      var api = this.api + "api/productcontent?id=" + id;
      this.$http.get(api).then(
        response => {
          //window.console.log(response);
          this.list = response.body.result[0];
          //控制异步获取数据后再渲染dom，防止undefined数据异常
          this.flag = true;
        },
        err => {
          window.console.log(err);
        }
      );
    },
    decNum() {
      if (this.num > 1) {
        --this.num;
      }
    },
    incNum() {
      ++this.num;
    },
    addCart() {
      //获取数据加入购物车
      var uid = storage.get("roomid");
      var api = this.api + "api/addcart";

      this.$http
        .post(api, {
          uid: uid,
          title: this.list.title,
          price: this.list.price,
          num: this.num,
          product_id: this.list._id,
          img_url: this.list.img_url
        })
        .then(
          response => {
            //window.console.log(response);

            if (response.body.success) {
              //加入购物车的时候给服务器发消息
              this.$socket.emit("addcart", "addcart");
              this.$router.push({ path: "home" });
            }
          },
          err => {
            window.console.log(err);
          }
        );
    }
  },
  created() {
    var id = this.$route.query.id;
    this.requestData(id);
  },
  mounted() {
    //动态路由
    // { path: '/pcontent/:id', component: Pcontent },
    //console.log(this.$route.params);
    //get传值
    // console.log(this.$route.query);
    // var id = this.$route.query.id;
    // this.requestData(id);
  }
};
</script>

<style lang="scss">
.back {
  height: 3.8rem;
  line-height: 3.8rem;
  width: 3.8rem;

  border-radius: 50%;

  background: #000;

  position: fixed;

  top: 0.5rem;

  left: 0.5rem;

  color: #fff;

  &:before {
    content: "";

    display: block;

    width: 0.8rem;
    height: 0.8rem;

    border-left: 0.2rem solid #fff;
    border-bottom: 0.2rem solid #fff;

    float: left;

    position: relative;

    top: 1.3rem;

    left: 0.6rem;

    transform: rotate(45deg);

    margin-right: 0.4rem;
  }
}

.p_content {
  .p_info {
    background: #fff;
    img {
      width: 100%;

      height: 18rem;
    }

    h2 {
      padding: 0.2rem 0.5rem;
    }

    .price {
      padding: 0.2rem 0.5rem;

      color: red;
    }
  }

  .p_detial {
    background: #fff;

    margin-top: 1rem;

    h3 {
      padding: 0.5rem;
    }

    .p_content {
      padding: 1rem;

      img {
        max-width: 100%;

        display: block;

        margin: 0 auto;
      }

      * {
        line-height: 1.5;

        color: #666;
      }
    }
  }
}

/*底部*/

.pfooter {
  position: fixed;

  bottom: 0px;
  height: 4.4rem;
  line-height: 4.4rem;

  background: #fff;

  left: 0px;

  width: 100%;

  border-top: 1px solid #eee;

  .cart {
    float: left;

    display: flex;

    strong {
      flex: 1;

      font-size: 1.6rem;

      padding: 0rem 0.5rem;
    }

    .cart_num {
      width: 10rem;

      display: flex;
      margin-top: 0.8rem;

      .input_left,
      .input_right {
        flex: 1;

        width: 2.8rem;
        height: 2.8rem;

        line-height: 2.8rem;

        text-align: center;

        color: red;

        border: 1px solid #eee;

        font-size: 2.4rem;
      }

      .input_center {
        flex: 1;

        input {
          width: 2rem;
          text-align: center;
          width: 100%;
          height: 2.8rem;
          border: none;

          border-top: 1px solid #eee;

          border-bottom: 1px solid #eee;

          float: left;
        }
      }
    }
  }

  .addcart {
    float: right;

    background: red;
    color: #fff;
    height: 3rem;
    border: none;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    margin-top: 0.8rem;
    margin-right: 0.5rem;

    a {
      color: #fff;
    }
  }
}
</style>