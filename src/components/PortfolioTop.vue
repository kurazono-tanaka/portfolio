<template>
  <div id="portfolio-top">
    <header class="header">
      <transition name="he-menu-tra">
        <section class="he-menu" v-if="showModal === false">
          <h1 class="font-menu-h1">PortfolioTop</h1>
          <!-- pc幅用 -->
          <nav class="he-menu-list">
            <ul class="he-menu-list-ul">
              <li>
                <a @click="closeModal" href="#ma-summary" class="font-menu-a">SUMMARY</a>
              </li>
              <li>
                <a @click="closeModal" href="#ma-about" class="font-menu-a">ABOUT</a>
              </li>
              <li>
                <a @click="closeModal" href="#ma-service" class="font-menu-a">共通点検索サービス</a>
              </li>
            </ul>
          </nav>
          <button @click="openModal" class="he-menu-icon is-open">
            <i class="fas fa-bars he-icon"></i>
          </button>
        </section>
      </transition>
      <transition name="he-overlay-tra">
        <section class="he-overlay" v-show="showModal">
          <div class="he-overlay-menu">
            <h1 class="font-menu-h1">PortfolioTop</h1>
            <button @click="closeModal" class="he-menu-icon is-close">
              <i class="fas fa-times he-icon"></i>
            </button>
          </div>
          <nav class="he-overlay-list">
            <ul class="he-overlay-list-ul">
              <li>
                <a @click="closeModal" href="#ma-summary" class="font-menu-h1">SUMMARY</a>
              </li>
              <li>
                <a @click="closeModal" href="#ma-about" class="font-menu-h1">ABOUT</a>
              </li>
              <li>
                <a @click="closeModal" href="#ma-service" class="font-menu-h1">共通点検索サービス</a>
              </li>
            </ul>
          </nav>
        </section>
      </transition>
      <section class="he-img">
        <img src="../../img/home1.png" class="he-img-back">
        <p class="he-img-p">
          共通点検索サービスは
          メンバー情報の検索ができます
        </p>
      </section>
    </header>
    <main class="main">
      <article id="ma-summary">
        <h2 class="ma-summary-h2" date-subtitle="SUMMARY">概要</h2>
        <div class="ma-summary-div">
          <section class="ma-summary-concept">
            <img src="../../img/home2.png" class="ma-summary-img">
            <h3 class="ma-summary-h3">サービスのコンセプト</h3>
            <p class="ma-summary-p">
              懇親会が開きにくい昨今、
              簡単にプロジェクトメンバーとの
              会話のきっかけづくりに
              使用できるなサービスです。
            </p>
          </section>
          <section class="ma-summary-overview">
            <img src="../../img/home3.png" class="ma-summary-img">
            <h3 class="ma-summary-h3">サービスの概要</h3>
            <p class="ma-summary-p">
              プロジェクトメンバーの
              経歴・趣味を検索することで、
              メンバーとの共通点を
              見つける事が可能です。
            </p>
          </section>
          <section class="ma-summary-howto">
            <img src="../../img/home4.png" class="ma-summary-img">
            <h3 class="ma-summary-h3">使い方</h3>
            <p class="ma-summary-p">
              自分の情報（経歴・趣味など）
              を登録し、
              メンバーの情報を
              検索することが可能です。
            </p>
          </section>
        </div>
      </article>
      <article id="ma-about">
        <h2 class="ma-about-h2" date-subtitle="ABOUT">自己紹介</h2>
        <div class="ma-about-div">
          <img src="../../img/about.png" class="ma-about-img">
          <ul class="ma-about-ul">
            <li>名前：Kurazono Azusa</li>
            <li>出身：鹿児島県（現在は東京都に在住）</li>
            <li>学歴：鹿児島大学大学院理工学研究科</li>
            <li>
              職歴：大学院卒業後、東京の会社に
              就職し、５年間勤務。
              プログラマーとして３年、
              Slerとして２年経験。
            </li>
          </ul>
        </div>
      </article>
      <article id="ma-service">
        <h2 class="ma-service-h2" date-subtitle="SERVICE">共通点検索サービス</h2>
        <img src="../../img/portfolio.png" class="ma-service-img">
        <button @click="goSignup" class="ma-service-button button-style">共通点検索サービスへ</button>
      </article>
    </main>
    <footer class="footer">
      <p>Copyright ©2019 ○○Inc. All rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'portfolio-top',
  data () {
    return {
      showModal: false,
    }
  },
  methods: {
    openModal () {
      // モーダルウィンドウ表示
      this.showModal = true
    },
    closeModal () {
      this.showModal = false
    },
    goSignup () {
      this.$router.push('/signup')
    }
  }
}
</script>

<style>
@import "../css/destyle.css";
#portfolio-top {
  position: relative;
}

.header {
  background-color: #feffd9;
}

.font-menu-h1 {
  font-size: 24px;
}

.he-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 58px;
  background-color: #AEE6C4;
  position: fixed;
  top:0;
  padding-right: 40px;
  padding-left: 40px;
  z-index: 10;
  opacity: 0.86;
}

.he-menu-list {
  display: none
}

.he-overlay-list-ul {
  list-style: none;
  margin: 0 auto;
  padding:0;
}

.he-overlay {
  width: 321px;
  height: 100%;
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  background-color:#AEE6C4;
  opacity: 0.86;
}

.he-menu-tra-enter, .he-menu-tra-leave-to {
  opacity: 0;
}

.he-menu-tra-enter-to, .he-menu-tra-leave {
  opacity: 0.86;
}

.he-menu-tra-enter-active, 
.he-menu-tra-leave-active {
  transition: all 0.3s ease;
}

.he-overlay-tra-enter, .he-overlay-tra-leave-to {
  transform: translateX(320px);
}

.he-overlay-tra-enter-to, .he-overlay-tra-leave {
  transform: translateX(0);
}

.he-overlay-tra-enter-active, 
.he-overlay-tra-leave-active {
  transition: all 0.3s ease;
}

.he-overlay-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 40px 20px;
}

.he-overlay-list {
  width: 100%;
  height: 250px;
}

.he-overlay-list-ul {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.he-img {
  width: 375px;
  margin: 0 auto;
  padding-top: 60px;
  position: relative;
}

.he-img-back {
  display: block;
  height: 260px;
  margin: 0 auto;
}

.he-img-p {
  width: 100%;
  line-height: 25px;
  text-align: center;
  white-space: pre-line;
  position: absolute;
  bottom: 10px;
  font-size: 16px;
  font-weight: bold;
  text-shadow: 1px 1px 2px pink;
}

.main {
  width: 375px;
  margin: 0 auto;
}

#ma-summary {
  margin: 0 auto;
  padding-top: 100px;
  text-align: center;
}

.ma-summary-h2 {
  font-size: 24px;
  font-weight: bold;
  position: relative;
}

.ma-summary-h2::before {
  content: attr(date-subtitle);
  font-size: 12px;
  font-weight: normal;
  position:absolute;
  top: -15px;
  left:0;
  right: 0;
  margin: auto;
}

.ma-summary-img {
  display: block;
  height: 200px;
  margin: 0 auto;
  margin-top:50px;
}

.ma-summary-h3 {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

.ma-summary-p {
  line-height: 25px;
  text-align: center;
  white-space: pre-line;
  font-size: 12px;
}

#ma-about {
  margin: 0 auto;
  padding-top: 100px;
  text-align: center;
}

.ma-about-h2 {
  font-size: 24px;
  font-weight: bold;
  position: relative;
}

.ma-about-h2::before {
  content: attr(date-subtitle);
  font-size: 12px;
  font-weight: normal;
  position:absolute;
  top: -15px;
  left:0;
  right: 0;
  margin: auto;
}

.ma-about-img {
  display: block;
  width: 282px;
  margin: 0 auto;
  margin-top: 25px;
}

.ma-service-img {
  display: block;
  width: 282px;
  margin: 0 auto;
  margin-top: 25px;
}

.ma-about-ul {
  margin: 0 auto;
  margin-top: 25px;
  width: 340px;
  list-style: square;
  text-align: left;
  line-height: 40px;
}

#ma-service {
  margin: 0 auto;
  padding-top: 100px;
  text-align: center;
}

.ma-service-h2 {
  font-size: 24px;
  font-weight: bold;
  position: relative;
}

.ma-service-h2::before {
  content: attr(date-subtitle);
  font-size: 12px;
  font-weight: normal;
  position:absolute;
  top: -15px;
  left:0;
  right: 0;
  margin: auto;
}

.button-style {
  height: 53px;
  width: 261px;
  font-weight: bold;
  border-radius: 50px;
  border: 2px solid #CDD6DD;
  color: #004BB1;
  line-height: 53px;
}

.ma-service-button {
  margin-top: 40px;
  margin-bottom: 150px;
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
  .he-overlay {
    width: 100%;
    height: 400px;
    z-index: 2;
    position: fixed;
    top: 0;
  }

  .he-overlay-tra-enter, .he-overlay-tra-leave-to {
    transform: translateY(-100%);
  }

  .he-overlay-tra-enter-to, .he-overlay-tra-leave {
    transform: translateX(0);
  }

  .he-overlay-menu {
    padding: 10px 40px 40px 40px;
  }

  .he-img {
    width: 768px;
    margin: 0 auto;
    padding-top: 60px;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .he-img-back {
    display: block;
    height: 260px;
    margin: 0;
  }

  .he-img-p {
    width: auto;
    line-height: 25px;
    text-align: center;
    white-space: pre-line;
    position: static;
    font-size: 24px;
    font-weight: bold;
    text-shadow: 1px 1px 2px pink;
  }

  .main {
    width: 768px;
    margin: 0 auto;
  }

  .ma-summary-div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .ma-about-div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}


@media (min-width: 1280px) {
  .he-menu-icon {
    display: none;
  }

  .he-menu {
    height: 100px;
  }

  .he-menu-list {
    display: block;
    width: 610px;
    height: 100%;
  }

  .he-menu-list-ul {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .font-menu-h1 {
    font-size: 38px;
  }

  .font-menu-a {
    font-size: 25px;
  }

  .he-img {
    width: 1280px;
    margin: 0 auto;
    padding-top: 100px;
    position: relative;
    align-items: stretch;
  }

  .he-img-back {
    height: 400px;
  }

  .he-img-p {
    font-size: 38px;
    line-height: 50px;
    margin-top: 100px;
  }

  .main {
    width: 1280px;
    margin: 0 auto;
  }

  .ma-summary-h2 {
    font-size: 38px;
  }

  .ma-summary-h3 {
    font-size: 24px;
  }

  .ma-summary-p {
    font-size: 16px;
  }

  .ma-about-h2 {
    font-size: 38px;
  }

  .ma-service-h2 {
    font-size: 38px;
  }

  .ma-about-div {
    margin-top: 60px;
    justify-content: center;
  }

  .ma-about-ul {
    font-size: 24px;
    width: 460px;
    margin: 0;
  }

  .ma-about-img {
    margin: 0;
    margin-right: 90px;
  }

  .ma-service-img {
    display: block;
    width: auto;
    height: 300px;
    margin: 0 auto;
    margin-top: 25px;
  }

  #ma-summary {
    padding-top: 140px;
  }

  #ma-about {
    padding-top: 140px;
  }

  #ma-service {
    padding-top: 140px;
  }
}

</style>

