<template>
  <div id="register">
    <header class="header">
      <section class="he-menu">
        <h1 class="font-menu-h1">共通点検索サービス</h1>
        <button class="he-btn" @click="goHome">ホーム画面へ</button>
      </section>
    </header>
    <div class="error">
      <p v-if="allFlag" class="er-p">
        選択されていない項目があります。選択し直してください。
      </p>
      <p v-if="languageFlag1" class="er-p">
        経験のある開発言語が４つ以上選択されています。選択し直してください。
      </p>
      <p v-if="languageFlag2" class="er-p">
        経験のある開発言語が選択されていません。選択し直してください。
      </p>
      <p v-if="hobbyFlag1" class="er-p">
        趣味が４つ以上選択されています。選択し直してください。
      </p>
      <p v-if="hobbyFlag2" class="er-p">
        趣味が選択されていません。選択し直してください。
      </p>
      <p v-if="allListsErrorMsg1" class="er-p">
        {{allListsErrorMsg1}}
      </p>
      <p v-if="allListsErrorMsg2" class="er-p">
        {{allListsErrorMsg2}}
      </p>
    </div>
    <main class="main">
      <h2 class="ma-h2">ユーザ情報登録</h2>
      <ul class="ma-ul">
        <li class="ma-li">
          <p class="ma-label">お名前</p>
          <p class="ma-text">{{ username }}</p>
        </li>
        <li class="ma-li">
          <label for="belongs" class="ma-label">所属</label>
          <div class="ma-form">
            <select id="belongs" v-model="belongs" class="ma-select">
              <option value="" disabled>選択して下さい</option>
              <option v-for="(item, index) in belongsList" :key="index">{{
                item
              }}</option>
            </select>
          </div>
        </li>
        <li class="ma-li">
          <label for="country" class="ma-label">出身（国）</label>
          <div class="ma-form">
            <select
              id="country"
              v-model="country"
              @change="calculation"
              class="ma-select"
            >
              <option value="" disabled>選択して下さい</option>
              <option v-for="(item, index) in countryList" :key="index">{{
                item
              }}</option>
            </select>
          </div>
        </li>
        <li class="ma-li">
          <label for="city" class="ma-label">出身（都市）</label>
          <div class="ma-form">
            <select id="city" v-model="city" class="ma-select">
              <option value="" disabled>選択して下さい</option>
              <option v-for="(item, index) in cityList" :key="index">{{
                item
              }}</option>
            </select>
          </div>
        </li>
        <li class="ma-li">
          <div class="ma-label">
            <p>経験のある開発言語</p>
            <p>※３つまで選択可</p>
          </div>
          <div class="ma-checkbox">
            <label
              v-for="item in languageList"
              :key="item[0]"
              class="ma-checkbox-label"
              ><input type="checkbox" :value="item[1]" v-model="language" />{{
                item[1]
              }}</label
            >
          </div>
        </li>
        <li class="ma-li">
          <div class="ma-label">
            <p>趣味</p>
            <p>※３つまで選択可</p>
          </div>
          <div class="ma-checkbox">
            <label
              v-for="item in hobbyList"
              :key="item[0]"
              class="ma-checkbox-label"
              ><input type="checkbox" :value="item[1]" v-model="hobby" />{{
                item[1]
              }}</label
            >
          </div>
        </li>
        <li class="ma-li">
          <label for="message" class="ma-label">メンバーに対して一言</label>
          <textarea
            id="message"
            v-model="message"
            class="ma-message"
            placeholder="入力して下さい"
          ></textarea>
        </li>
      </ul>
      <button class="ma-btn" @click="verification">確認する</button>
    </main>
    <footer class="footer">
      <p>©2021 KurazonoAzusa</p>
    </footer>
  </div>
</template>

<script>
import definition from "@/helpers/definition";

export default {
  name: "register",
  data() {
    return {
      username: "",
      belongs: "",
      belongsList: ["技術課", "金融課", "住宅課", "WEBデザイン課"],
      country: "",
      countryList: ["日本", "アメリカ", "中国", "インド", "その他"],
      city: "",
      cityList: ["東京", "京都"],
      language: [],
      languageList: [],
      languageFlag1: false,
      languageFlag2: false,
      hobby: [],
      hobbyList: [],
      hobbyFlag1: false,
      hobbyFlag2: false,
      message: "",
      allFlag: false,
      allListsErrorMsg1: "",
      allListsErrorMsg2: "",
    };
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
    calculation() {
      const obj = definition.selectCity({
        country: this.country
      });
      this.cityList = obj.cityList;
      this.city = obj.city;
    },
    verification() {
      if (this.language.length > 3) {
        this.languageFlag1 = true;
      } else {
        this.languageFlag1 = false;
      }
      if (this.language.length === 0) {
        this.languageFlag2 = true;
      } else {
        this.languageFlag2 = false;
      }
      if (this.hobby.length > 3) {
        this.hobbyFlag1 = true;
      } else {
        this.hobbyFlag1 = false;
      }
      if (this.hobby.length === 0) {
        this.hobbyFlag2 = true;
      } else {
        this.hobbyFlag2 = false;
      }
      if (this.belongs === "" || this.country === "" || this.city === "") {
        this.allFlag = true;
      } else {
        this.allFlag = false;
      }
      if (
        this.languageFlag1 === false &&
        this.languageFlag2 === false &&
        this.hobbyFlag1 === false &&
        this.hobbyFlag2 === false &&
        this.allFlag === false
      ) {
        this.$store.commit("setBelongs", this.belongs);
        this.$store.commit("setCountry", this.country);
        this.$store.commit("setCity", this.city);
        this.$store.commit("setLanguage", this.language);
        this.$store.commit("setHobby", this.hobby);
        this.$store.commit("setMessage", this.message);
        this.$router.push("/verification");
      }
    }
  },
  async mounted() {
    this.username = this.$store.getters.getUserName;
    await this.$store.dispatch("signCheck");
    console.log("signCheckが完了した");
    await this.$store.dispatch("getUserList");
    console.log("getUserListが完了した");
    await this.$store.dispatch("getAllLists");
    console.log("getAllListsが完了した");
    this.allListsErrorMsg1 = this.$store.getters.getAllListsErrorMsg1;
    this.allListsErrorMsg2 = this.$store.getters.getAllListsErrorMsg2;
    this.languageList = this.$store.getters.getLanguageList;
    console.log("this.languageList");
    console.log(this.languageList);
    for (let i = 0; i < 3; i++) {
      const data = this.languageList[i];
      this.language.push(data[1]);
    }
    console.log("this.language");
    console.log(this.language);
    this.hobbyList = this.$store.getters.getHobbyList;
    console.log(" this.hobbyList");
    console.log(this.hobbyList);
    for (let i = 0; i < 3; i++) {
      const data = this.hobbyList[i];
      this.hobby.push(data[1]);
    }
    console.log("this.hobby");
    console.log(this.hobby);
    console.log("mounted完了");
  }
};
</script>

<style scoped>
#register {
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

.ma-select {
  width: 100%;
}

.ma-form::after {
  content: ">";
  transform: rotate(90deg);
  display: block;
  font-size: 13px;
  font-weight: bold;
  position: absolute;
  top: 13px;
  right: 0;
  width: 35px;
  height: 35px;
  pointer-events: none;
}

.ma-checkbox-label {
  display: inline-block;
  margin-right: 17px;
}

.ma-message {
  height: 140px;
  width: 100%;
  border: 1px solid #707070;
  padding: 10px 20px;
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
  #register {
    min-height: 1100px;
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
}

@media (min-width: 1280px) {
  #register {
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
