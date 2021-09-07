<template>
  <div id="updateInformation">
    <header class="header">
      <section class="he-menu">
        <h1 class="font-menu-h1">共通点検索サービス</h1>
        <button class="he-btn" @click="goHome">ホーム画面へ</button>
      </section>
    </header>
    <main class="main">
      <h2 class="ma-h2">ユーザ情報登録完了</h2>
      <p class="ma-p">{{ username }}様の ユーザ情報登録が完了しました。</p>
      <button class="ma-btn" @click="goHome">ホーム画面へ</button>
    </main>
    <footer class="footer">
      <p>©2021 KurazonoAzusa</p>
    </footer>
  </div>
</template>

<script>
import "firebase/auth";

export default {
  name: "updateInformation",
  data() {
    return {
      username: ""
    };
  },
  methods: {
    goHome() {
      this.$store.commit("setBelongs", "");
      this.$store.commit("setCountry", "");
      this.$store.commit("setCity", "");
      this.$store.commit("setLanguage", "");
      this.$store.commit("setHobby", "");
      this.$store.commit("setMessage", "");
      this.$router.push("/home");
    }
  },
  mounted() {
    this.username = this.$store.getters.getUserName;
  }
};
</script>

<style scoped>
#updateInformation {
  height: 100%;
  min-height: 820px;
  position: relative;
  box-sizing: border-box;
}

.font-menu-h1 {
  font-size: 16px;
}

.he-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 58px;
  background-color: #aed3e6;
  padding-right: 40px;
  padding-left: 40px;
  opacity: 1;
  position: static;
}

.he-btn {
  font-size: 16px;
}

.main {
  width: 375px;
  margin: 0 auto;
  text-align: center;
  padding-top: 45px;
}

.ma-h2 {
  font-size: 24px;
  font-weight: bold;
}

.ma-p {
  width: 330px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 36px;
  text-align: center;
  white-space: pre-line;
}

.ma-btn {
  height: 53px;
  width: 261px;
  font-weight: bold;
  border-radius: 50px;
  background-color: #004bb1;
  color: #ffffff;
  line-height: 53px;
  margin-top: 45px;
}

.footer {
  width: 100%;
  height: 27px;
  line-height: 27px;
  background-color: #dddddd;
  border: 1px solid #707070;
  text-align: center;
  font-size: 12px;
  position: absolute;
  bottom: 0;
}

@media (min-width: 768px) {
  .main {
    width: 768px;
  }

  .ma-p {
    width: 550px;
  }
}

@media (min-width: 1280px) {
  .he-menu {
    height: 100px;
  }

  .font-menu-h1 {
    font-size: 38px;
  }

  .he-btn {
    font-size: 25px;
  }

  .main {
    width: 1280px;
    padding-top: 60px;
  }

  .ma-h2 {
    font-size: 36px;
  }

  .ma-p {
    margin: 0 auto;
    margin-top: 50px;
    font-size: 16px;
    line-height: 36px;
    text-align: center;
    white-space: normal;
  }
}
</style>
