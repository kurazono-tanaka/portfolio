<template>
  <div id="detail">
    <header class="header">
      <section class="he-menu">
        <h1 class="font-menu-h1">共通点検索サービス</h1>
        <button class="he-btn" @click="goHome">ホーム画面へ</button>
      </section>
    </header>
    <main class="main">
      <h2 class="ma-h2">検索結果（詳細）</h2>
      <ul class="ma-ul">
        <li class="ma-li">
          <p class="ma-label">お名前</p>
          <p class="ma-text">{{username}}</p>
        </li>
        <li class="ma-li">
          <p class="ma-label">所属</p>
          <p class="ma-text">{{belongs}}</p>
        </li>
        <li class="ma-li">
          <p class="ma-label">出身（国）</p>
          <p class="ma-text">{{country}}</p>
        </li>
        <li class="ma-li">
          <p class="ma-label">出身（都市）</p>
          <p class="ma-text">{{city}}</p>
        </li>
        <li class="ma-li">
          <p class="ma-label">経験のある開発言語</p>
          <ul class="ma-text">
            <li v-for="(item, index) in language" :key="index">{{item}}</li>
          </ul>
        </li>
        <li class="ma-li">
          <p class="ma-label">趣味</p>
          <ul class="ma-text">
            <li v-for="(item, index) in hobby" :key="index">{{item}}</li>
          </ul>
        </li>
        <li class="ma-li">
          <p class="ma-label">メンバーに対して一言</p>
          <p class="ma-message">{{message}}</p>
        </li>
      </ul>
      <button class="ma-btn" @click="result">検索結果画面に戻る</button>
    </main>
    <footer class="footer">
      <p>©2021 KurazonoAzusa</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      detailUser: [],
      username: '',
      belongs:'',
      country:'',
      city:'',
      language:[],
      hobby: [],
      message: ''
    }
  },
  methods: {
    goHome () {
      this.$router.push('/home')
    },
    result() {
      this.$router.push('/result')
    }
  },
  async mounted () {
    this.detailUser = this.$store.getters.getDetailUser
    this.username = this.detailUser[0]
    this.belongs = this.detailUser[2]
    this.country = this.detailUser[3]
    this.city = this.detailUser[4]
    this.language = this.detailUser[5]
    this.hobby = this.detailUser[6]
    this.message = this.detailUser[7]
    console.log('検索結果(詳細)画面のmounted完了')
  }
}
</script>

<style scoped>
#detail {
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
  height: 53px;
  width: 261px;
  font-weight: bold;
  border-radius: 50px;
  background-color: #004BB1;
  color: #FFFFFF;
  line-height: 53px;
  margin-top: 50px;
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
  #detail {
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
  #detail {
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