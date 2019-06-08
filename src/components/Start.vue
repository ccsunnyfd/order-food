<template>
  <!---
v-show  显示隐藏  display
v-if  dom操作
-->

  <div id="start">
    <!-- <div v-show="showLoading">
      <img src="../assets/images/loading.gif" />Loading...
    </div> -->

    <div class="start_content">
      <header class="start_header">
        <img src="../assets/images/canju.png" /> 用餐人数
      </header>
      <v-peopleInfo ref="peopleInfo" :startPage="true"></v-peopleInfo>
    </div>


    <div id="start" class="start" @click="confirmPeopleInfo">
      <span>
        开始点菜
      </span>
    </div>
  </div>
</template>


<script>
import PeopleInfo from "@/components/public/PeopleInfo.vue";

export default {
  data() {
    return {
    };
  },
  components: {
    'v-peopleInfo': PeopleInfo
  },
  methods: {
    confirmPeopleInfo() {
      this.$refs.peopleInfo.addPeopleInfo();
    }
  }
};
</script>

<style lang="scss">
.start_content {
  .start_header {
    height: 3.2rem;

    line-height: 3.2rem;
    background: #000;

    color: #fff;

    width: 10rem;

    margin: 5rem auto 0rem auto;

    border-radius: 0.5rem;

    img {
      height: 2.2rem;

      line-height: 2.2rem;
      position: relative;
      margin-right: 0.4rem;
      top: 0.5rem;
      margin-left: 1rem;
    }
  }

  .notice {
    color: red;
    //
    text-align: center;

    margin: 1rem 0rem;
  }

  .mark_input {
    padding: 1rem;

    input {
      height: 3rem;
      line-height: 3rem;

      width: 100%;
      border: 1px solid #eee;
    }
  }
  .user_list,
  .mark_list {
    display: flex;

    flex-wrap: wrap;
    padding: 0.5rem;

    li {
      width: 25%;
      padding: 0.5rem;
      box-sizing: border-box; /*盒子的宽度=盒子本身宽度    默认 盒子的宽度=盒子的宽度+padding+border*/

      span {
        display: block;

        width: 100%;
        height: 3.2rem;

        line-height: 3.2rem;
        text-align: center;
        background: #fff;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
      }
    }

    li.active {
      span {
        background: red;
        border: 1px solid red;

        color: #fff;
      }
    }
  }
}

.start {
  position: fixed;

  bottom: 5rem;

  left: 50%;
  margin-left: -3rem;

  width: 6rem;

  height: 6rem;

  border-radius: 50%;

  background: red;
  color: #fff;

  span {
    display: block;

    text-align: center;

    width: 2.5rem;

    margin: 0 auto;

    position: relative;

    top: 1.5rem;
  }
}
</style>