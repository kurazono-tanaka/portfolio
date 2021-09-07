<template>
  <div id="signin">
    <header class="header">
      <section class="he-menu">
        <h1 class="font-menu-h1">共通点検索サービス</h1>
        <button @click="goTop" class="he-btn">TOPへ</button>
        <button @click="goTop" class="he-btn-768px">PortfolioTOPへ</button>
      </section>
    </header>
    <main class="main">
      <div class="ma-title">
        <h1 class="ma-h2">ログイン画面</h1>
      </div>
      <ul class="ma-ul">
        <li>
          <label for="mailaddress" class="ma-label">メールアドレス</label>
          <input
            type="email"
            id="mailaddress"
            placeholder="E-mail"
            class="ma-form"
            v-model="mailaddress"
          />
        </li>
        <li>
          <label for="password" class="ma-label">パスワード</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            class="ma-form"
            v-model="password"
          />
        </li>
      </ul>
      <button class="ma-btn-signIn" @click="signIn">ログイン</button>
      <router-link to="/signup" class="ma-link"
        >新規登録はこちらから</router-link
      >
    </main>
    <footer class="footer">
      <p>©2021 KurazonoAzusa</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "signin",
  data() {
    return {
      mailaddress: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      this.$store.dispatch("signIn", {
        mailaddress: this.mailaddress,
        password: this.password
      });
    },
    goTop() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
#signin {
  height: 100%;
  min-height: 750px;
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

.he-btn-768px {
  display: none;
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

.ma-title {
  width: 250px;
  margin: 0 auto;
  padding-bottom: 30px;
  border-bottom: 1px solid #707070;
}

.ma-ul {
  width: 330px;
  margin: 0 auto;
  margin-top: 30px;
  text-align: left;
}

.ma-label {
  font-size: 16px;
  font-weight: bold;
  display: block;
}

.ma-form {
  display: block;
  border: 1px solid #707070;
  width: 100%;
  height: 35px;
  padding-left: 10px;
  margin-bottom: 25px;
}

.ma-btn-signIn {
  margin-top: 20px;
  height: 53px;
  width: 261px;
  font-weight: bold;
  border-radius: 50px;
  background-color: #004bb1;
  color: #ffffff;
  line-height: 53px;
}

.ma-link {
  display: block;
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 16px;
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
  .he-btn {
    display: none;
  }

  .he-btn-768px {
    font-size: 16px;
    display: block;
  }

  .main {
    width: 768px;
  }

  .ma-title {
    width: 580px;
    padding-bottom: 40px;
  }

  .ma-ul {
    width: 550px;
    margin-top: 40px;
  }
}

@media (min-width: 1280px) {
  #signin {
    height: 100%;
    min-height: 1200px;
    position: relative;
    box-sizing: border-box;
  }
   
  .he-menu {
    height: 100px;
  }

  .font-menu-h1 {
    font-size: 38px;
  }

  .he-btn-768px {
    display: block;
    font-size: 25px;
  }

  .main {
    border: 1px solid #707070;
    padding-bottom: 190px;
    margin-top: 54px;
    margin-bottom: 120px;
  }

  .ma-h2 {
    font-size: 36px;
  }

  .ma-form {
    height: 42px;
    margin-bottom: 34px;
  }
}
</style>
