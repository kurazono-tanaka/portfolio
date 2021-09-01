<template>
  <div id="signup">
    <header class="header">
      <section class="he-menu">
        <h1 class="font-menu-h1">共通点検索サービス</h1>
        <button @click="goTop" class="he-btn">TOPへ</button>
        <button @click="goTop" class="he-btn-768px">PortfolioTOPへ</button>
      </section>
    </header>
    <main class="main">
      <p v-if="message">メール認証が終わっていません。メールを確認して認証を完了してください。（認証メールを再送信する。）</p>
      <div class="ma-title">
        <h2 class="ma-h2">新規登録画面</h2>
        <p class="ma-p">メールアドレスもしくはSNSアカウントで登録</p>
      </div>
      <ul class="ma-ul">
        <li>
          <label for="mailaddress" class="ma-label">メールアドレス</label>
          <input type="email" id="mailaddress" placeholder="E-mail" class="ma-form" v-model="mailaddress"/>
        </li>
        <li>
          <label for="username" class="ma-label">ユーザー名</label>
          <input type="text" id="username" placeholder="userName" class="ma-form" v-model="username"/>
        </li>
        <li>
          <label for="password" class="ma-label">パスワード</label>
          <input type="password" id="password" placeholder="Password" class="ma-form" v-model="password"/>
        </li>
      </ul>
      <button class="ma-btn-signUp" @click="signUp">登録する</button>
      <router-link to="/signin" class="ma-link">すでにアカウントをお持ちの方はこちら</router-link>
    </main>
    <footer class="footer">
      <p>Copyright ©2019 ○○Inc. All rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      username: '',
      mailaddress: '',
      password: '',
      message: false
    }
  },
  methods: {
    signUp () {
      this.message = true
      this.$store.dispatch('signUp', {username: this.username, mailaddress: this.mailaddress, password: this.password})
    },
    goTop () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
#signup {
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
  background-color: #AED3E6;
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

.ma-p {
  font-size: 12px;
  margin-top: 8px;
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

.ma-btn-signUp {
  margin-top: 20px;
  height: 53px;
  width: 261px;
  font-weight: bold;
  border-radius: 50px;
  background-color: #004BB1;
  color: #FFFFFF;
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
  background-color: #DDDDDD;
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
  .he-menu {
    height: 100px;
    background-color: #AED3E6;
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

  .ma-p {
    font-size: 16px;
    margin-top: 8px;
  }

  .ma-form {
    height: 42px;
    margin-bottom: 34px;
  }
}
</style>