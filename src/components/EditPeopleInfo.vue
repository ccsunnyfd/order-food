<template>
  <div id="editPeopleInfo">
    <div class="start_content">
      <header class="start_header">
        <img src="../assets/images/canju.png" /> 修改用餐人数
      </header>

      <v-peopleInfo ref="peopleInfo" :startPage="false"></v-peopleInfo>
    </div>

    <div id="start_cancel" class="start_cancel">
      <router-link to="/cart">
        <span>
          取消
        </span>
      </router-link>
    </div>

    <div id="start_ok" class="start_ok" @click="confirmModify">
      <span>
        确定修改
      </span>
    </div>
  </div>
</template>


<script>
import PeopleInfo from "@/components/public/PeopleInfo.vue";

export default {
  data() {
    return {};
  },
  components: {
    "v-peopleInfo": PeopleInfo
  },
  methods: {
    confirmModify() {
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

    width: 2rem;

    margin: 0 auto;

    position: relative;

    top: 1.5rem;
  }
}

.start_ok {
  position: fixed;

  bottom: 4rem;

  right: 6rem;

  width: 4rem;

  height: 4rem;

  border-radius: 50%;

  background: red;
  color: #fff;

  span {
    display: block;

    width: 2rem;

    margin: 0 auto;

    position: relative;

    top: 0.5rem;
  }
  a {
    color: #fff;
  }
}
.start_cancel {
  position: fixed;
  bottom: 4rem;

  left: 6rem;

  width: 4rem;

  height: 4rem;

  border-radius: 50%;

  background: red;
  color: #fff;

  span {
    display: block;

    width: 2rem;

    margin: 0 auto;

    position: relative;

    top: 1.5rem;
  }
  a {
    color: #fff;
  }
}
</style>