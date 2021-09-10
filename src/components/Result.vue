<template>
  <div id="result">
    <header class="header">
      <section class="he-menu">
        <h1 class="font-menu-h1">共通点検索サービス</h1>
        <button class="he-btn" @click="goHome">ホーム画面へ</button>
      </section>
    </header>
    <main class="main">
      <h2 class="ma-h2">ユーザ情報検索</h2>
      <ul class="ma-ul">
        <li class="ma-li">
          <p class="ma-label">お名前</p>
          <p class="ma-text">{{ username }}</p>
        </li>
        <li class="ma-li">
          <p class="ma-label">所属</p>
          <p class="ma-text">{{ belongs }}</p>
        </li>
        <li class="ma-li">
          <p class="ma-label">出身（国）</p>
          <p class="ma-text">{{ country }}</p>
        </li>
        <li class="ma-li">
          <p class="ma-label">出身（都市）</p>
          <p class="ma-text">{{ city }}</p>
        </li>
        <li class="ma-li">
          <p class="ma-label">経験のある開発言語</p>
          <ul class="ma-text">
            <li v-for="(item, index) in language" :key="index">{{ item }}</li>
          </ul>
        </li>
        <li class="ma-li">
          <p class="ma-label">趣味</p>
          <ul class="ma-text">
            <li v-for="(item, index) in hobby" :key="index">{{ item }}</li>
          </ul>
        </li>
      </ul>
      <h2 class="ma-h2">検索結果</h2>
      <p class="ma-p">{{ number }}名のユーザが検索されました。</p>
      <ul class="ma-ul-result">
        <li
          v-for="(doc, index) in matchUserList"
          :key="index"
          class="ma-li-result"
        >
          <div class="ma-header-result">
            <div class="ma-name-result">
              <p class="ma-label-result">お名前：</p>
              <p class="ma-text-result">{{ doc[0] }}</p>
            </div>
            <button class="ma-btn-result" @click="detail(doc[1])">詳細</button>
            <button class="ma-btn-result-768" @click="detail(doc[1])">
              詳細を見る
            </button>
          </div>
          <div class="ma-item-result">
            <p class="ma-text-item">該当項目</p>
            <ul>
              <li v-for="(item, index) in doc[8]" :key="index">{{ item }}</li>
            </ul>
          </div>
        </li>
      </ul>
      <button class="ma-btn" @click="search">ユーザ情報検索画面に戻る</button>
    </main>
    <footer class="footer">
      <p>©2021 KurazonoAzusa</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Result",
  data() {
    return {
      matchUserList: [],
      number: 0,
      username: "",
      belongs: "",
      country: "",
      city: "",
      language: "",
      hobby: ""
    };
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
    detail(email) {
      console.log("detailの引数email");
      console.log(email);
      const detailUserList = this.matchUserList.filter(doc => doc[1] === email);
      if (detailUserList.length === 1) {
        console.log("emailは一意");
      } else {
        console.log("エラー：emailが一意でない");
      }
      const detailUser = detailUserList[0];
      console.log("detailUserの中身");
      console.log(detailUser);
      this.$store.commit("setDetailUser", detailUser);
      this.$router.push("/detail");
    },
    search() {
      this.$router.push("/search");
    }
  },
  async mounted() {
    this.matchUserList = this.$store.getters.getMatchUserList;
    this.number = this.matchUserList.length;
    this.username = this.$store.getters.getUserName;
    this.belongs = this.$store.getters.getBelongs;
    this.country = this.$store.getters.getCountry;
    this.city = this.$store.getters.getCity;
    this.language = this.$store.getters.getLanguage;
    this.hobby = this.$store.getters.getHobby;
    console.log("検索結果画面のmounted完了");
  }
};
</script>

<style scoped>
#result {
  height: 100%;
  min-height: 1700px;
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
  margin: 0 auto;
  margin-top: 15px;
}

.ma-ul {
  width: 330px;
  margin: 0 auto;
  margin-top: 30px;
  text-align: left;
}

.ma-ul-result {
  width: 330px;
  height: 600px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 10px;
  border: solid 1px black;
  overflow: scroll;
}

.ma-li {
  margin-bottom: 35px;
}

.ma-li-result {
  margin-bottom: 35px;
  border: solid 1px black;
}

.ma-header-result {
  border-bottom: 1px solid black;
  background-color: #aed3e6;
  padding-left: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ma-name-result {
  display: flex;
  align-items: center;
}

.ma-item-result {
  padding: 18px;
  text-align: left;
}

.ma-btn-result {
  display: block;
  width: 70px;
  height: 44px;
  font-weight: bold;
  background-color: white;
  border: solid 1px black;
  border-radius: 15px;
}

.ma-btn-result-768 {
  display: none;
}

.ma-label {
  font-size: 16px;
  font-weight: bold;
  display: block;
}

.ma-checkbox-label {
  display: inline-block;
  margin-right: 17px;
}

.ma-btn {
  height: 53px;
  width: 261px;
  font-weight: bold;
  border-radius: 50px;
  background-color: #004bb1;
  color: #ffffff;
  line-height: 53px;
  margin-top: 75px;
}

.ma-btn:hover {
  opacity: 0.8;
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
  #result {
    min-height: 1700px;
  }

  .main {
    width: 768px;
  }

  .ma-ul {
    width: 550px;
    margin-top: 40px;
  }

  .ma-li {
    display: flex;
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

  .ma-checkbox {
    display: block;
    width: 350px;
  }

  .ma-message {
    display: block;
    height: 140px;
    width: 350px;
  }

  .ma-ul-result {
    width: 700px;
    padding: 35px;
  }

  .ma-li-result {
    margin-bottom: 35px;
    border: solid 1px black;
    display: flex;
  }

  .ma-header-result {
    border-right: 1px solid black;
    border-bottom: none;
    padding-left: 0;
    padding-top: 17px;
    padding-bottom: 17px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 216px;
  }

  .ma-name-result {
    display: block;
  }

  .ma-item-result {
    padding: 18px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .ma-btn-result {
    display: none;
  }

  .ma-btn-result-768 {
    display: block;
    width: 180px;
    height: 44px;
    line-height: 44px;
    font-weight: bold;
    background-color: white;
    border: solid 1px black;
    border-radius: 20px;
  }
}

@media (min-width: 1280px) {
  #result {
    min-height: 1700px;
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
}
</style>
