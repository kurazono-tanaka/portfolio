<template>
  <div id="updateInformation">
    <header class="header">
      <section class="he-menu">
        <h1 class="font-menu-h1">共通点検索サービス</h1>
        <button class="he-btn" @click="goHome">ホーム画面へ</button>
      </section>
    </header>
    <main>
      <h1>ユーザ情報登録完了</h1>
      <p>{{username}}様のユーザ情報登録が完了しました。</p>
      <button class="btn-style1" @click="goHome">ホーム画面へ</button>    
    </main>
    <footer>
      <p>Copyright ©2019 ○○Inc. All rights reserved</p>
    </footer>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'updateInformation',
  data () {
    return {
      username: '',
    }
  },
  methods: {
    goHome () {
      this.$store.commit('setBelongs', '');
      this.$store.commit('setCountry', '');
      this.$store.commit('setCity', '');
      this.$store.commit('setLanguage', '');
      this.$store.commit('setHobby', '');
      this.$store.commit('setMessage', '');
      this.$router.push('/home')
    }
  },
  mounted () {
    this.username = this.$store.getters.getUserName
  }
}
</script>

<style>
#updateInformation {
  height: 100%;
  min-height: 1300px;
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

.ma-ul {
  width: 330px;
  margin: 0 auto;
  margin-top: 30px;
  text-align: left;
}

.ma-li {
  margin-bottom: 35px;
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
  padding-left: 20px;
  font-size: 16px;
  position: relative;
  line-height: 35px;
}


.ma-checkbox-label {
  display: inline-block;
  margin-right: 17px;
}

.ma-btn-div {
  margin-top: 25px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.ma-btn {
  /* margin-top: 12px;
  margin-bottom: 55px; */
  height: 53px;
  width: 261px;
  font-weight: bold;
  border-radius: 50px;
  background-color: #004BB1;
  color: #FFFFFF;
  line-height: 53px;
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
  #updateInformation {
    min-height: 1000px;
  }

  .main {
    width: 768px;
  }

  .ma-ul {
    width: 550px;
    margin-top: 40px;
  }

  .ma-li {
    display:flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

  .ma-label {
    display: block;
    width: 160px;
  }

  .ma-text {
    text-align: left;
    display: block;
    width: 350px;
  }

  .ma-form {
    display: block;
    width: 350px;
  }

  .ma-checkbox {
    display: block;
    width: 350px;
  }

  .ma-message {
    display: block;
    height: 140px;
    width: 350px;
  }

  .ma-btn-div {
    margin: 0 auto;
    margin-top: 50px;
    height: auto;
    width: 550px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

}

@media (min-width: 1280px) {
  #updateInformation {
    min-height: 1200px;
  }
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

  .ma-ul {
    margin-top: 40px;
  }

  .ma-h2 {
    font-size: 36px;
  }

  .ma-form {
    height: 42px;
    line-height: 42px;
  }

}
</style>