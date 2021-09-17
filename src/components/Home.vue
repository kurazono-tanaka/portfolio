<template>
  <div id="home">
    <header class="header">
      <section class="he-menu">
        <h1 class="font-menu-h1">共通点検索サービス</h1>
        <button class="he-btn" @click="signOut">ログアウト</button>
      </section>
    </header>
    <div class="error">
      <p v-if="errorMsg" class="er-p">
        {{errorMsg}}
      </p>
    </div>
    <main class="main">
      <div class="ma-content">
        <h2 class="ma-h2">同僚との共通点をみつけよう</h2>
        <p class="ma-p">
          プロジェクトメンバーともっと
          親交を深めたいけど、話すきっかけがない。
          そんなとき、
          簡単に共通点を検索できるサービスです。
        </p>
        <p class="ma-p-768">
          プロジェクトメンバーともっと 親交を深めたいけど、話すきっかけがない。
          そんなとき、簡単に共通点を検索できるサービスです。
        </p>
        <p class="ma-btn-p">まずは自身の情報を登録しましょう。</p>
        <button class="ma-btn" @click="goRegister">登録へ</button>
        <p class="ma-btn-p">共通点を検索してみましょう。</p>
        <button class="ma-btn" @click="goSearch">検索へ</button>
      </div>
      <img src="../../img/portfolio.png" class="ma-img" />
    </main>
    <footer class="footer">
      <p>©2021 KurazonoAzusa</p>
    </footer>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "home",
  data() {
    return {
      username: "",
      wallet: 0,
      userId: "",
      modalName: "",
      modalWallet: 0,
      userList: [],
      showModal: false,
      showSendModal: false,
      sendingMoney: 0,
      destinationId: "",
      errorMsg: ""
    };
  },
  methods: {
    async signOut() {
      await this.$store.dispatch("signOut");
      this.errorMsg = this.$store.getters.getErrorMsg;
    },
    goRegister() {
      this.$router.push("/register");
    },
    goSearch() {
      this.$router.push("/search");
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("user");
        console.log(user);
        console.log("login");
      } else {
        //ログアウトのリロード時
        console.log("user");
        console.log(user);
        console.log("ログアウトのリロード時");
        console.log("logout");
      }
    });
  }
};
</script>

<style scoped>
#home {
  height: 100%;
  min-height: 850px;
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

.er-p {
  padding-left: 10px;
  padding-right: 10px;
  line-height: 25px;
  color: red;
  border: 1px solid red;
  background-color: #f2cece;
}

.ma-p {
  font-size: 16px;
  line-height: 36px;
  text-align: center;
  white-space: pre-line;
}

.ma-p-768 {
  display: none;
}

.ma-btn-p {
  font-size: 16px;
  margin-top: 37px;
}

.ma-btn {
  margin-top: 12px;
  height: 53px;
  width: 261px;
  font-weight: bold;
  border-radius: 50px;
  background-color: #004bb1;
  color: #ffffff;
  line-height: 53px;
}

.ma-btn:hover {
  opacity: 0.8;
}

.ma-img {
  display: block;
  width: 282px;
  margin: 0 auto;
  margin-top: 50px;
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
    margin: 0 auto;
    text-align: center;
    padding-top: 45px;
  }

  .ma-p {
    display: none;
  }

  .ma-p-768 {
    display: block;
    font-size: 16px;
    line-height: 36px;
    text-align: center;
    white-space: pre-line;
  }
}

@media (min-width: 1280px) {
  .he-menu {
    height: 100px;
  }

  .he-btn {
    font-size: 25px;
  }

  .font-menu-h1 {
    font-size: 38px;
  }

  .main {
    width: 1280px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 79px 134px 111px 134px;
  }

  .ma-h2 {
    font-size: 35px;
  }

  .ma-p-768 {
    display: block;
    font-size: 20px;
    line-height: 36px;
    text-align: left;
    white-space: pre-line;
  }

  .ma-img {
    display: block;
    width: 420px;
    margin: 0;
    margin-top: 50px;
  }

  .ma-btn-p {
    font-size: 20px;
    margin-top: 45px;
  }
}
</style>
