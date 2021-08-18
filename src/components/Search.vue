<template>
  <div class="search">
    <main>
      <h1>ユーザ情報検索</h1>
      <!-- <p v-if="allFlag">選択されていない項目があります。選択し直してください。</p> -->
      <p v-if="languageFlag1">経験のある開発言語が４つ以上選択されています。選択し直してください。</p>
      <p v-if="languageFlag2">経験のある開発言語が選択されていません。選択し直してください。</p>
      <p v-if="hobbyFlag1">趣味が４つ以上選択されています。選択し直してください。</p>
      <p v-if="hobbyFlag2">趣味が選択されていません。選択し直してください。</p>
      <ul>
        <li>
          <label for="username">お名前</label>
          <select id="username" v-model="username">
              <option v-for="item in userNameList" :key="item[0]">{{
                item[1]
              }}</option>
          </select>
        </li>
        <li>
          <label for="belongs">所属</label>
          <select id="belongs" v-model="belongs">
              <option v-for="(item, index) in belongsList" :key="index">{{
                item
              }}</option>
          </select>
        </li>
        <li>
          <label for="country">出身（国）</label>
          <select id="country" v-model="country" @change="calculation">
              <option v-for="(item, index) in countryList" :key="index">{{
                item
              }}</option>
          </select>
        </li>
        <li>
          <label for="city">出身（都市）</label>
          <select id="city" v-model="city">
              <option v-for="(item, index) in cityList" :key="index">{{
                item
              }}</option>
          </select>
        </li>
        <li>
          <div>
            <p>経験のある開発言語</p>
            <p>※３つまで選択可</p>
          </div>
          <label v-for="item in languageList" :key="item[0]"><input type="checkbox" :value="item[1]" v-model="language">{{item[1]}}</label>
        </li>
        <li>
          <div>
            <p>趣味</p>
            <p>※３つまで選択可</p>
          </div>
          <label v-for="item in hobbyList" :key="item[0]"><input type="checkbox" :value="item[1]" v-model="hobby">{{item[1]}}</label>
        </li>
      </ul>
      <button class="btn-style1" @click="search">検索する</button>
    </main>
    <footer>
      <p>Copyright ©2019 ○○Inc. All rights reserved</p>
    </footer>
  </div>
</template>

<script>
import definition from '@/helpers/definition';
// import firebase from 'firebase/app'
// import 'firebase/auth'

export default {
  name: 'Search',
  data () {
    return {
      username: '',
      userNameList: [],
      belongs: '技術課',
      belongsList: ['技術課','金融課','住宅課','WEBデザイン課'],
      country: '日本',
      countryList: ['日本','アメリカ','中国','インド','その他'],
      city: '東京',
      cityList: ['東京','京都'],
      language: [],
      languageList: [],
      languageFlag1: false,
      languageFlag2: false,
      hobby: [],
      hobbyList: [],
      hobbyFlag1: false,
      hobbyFlag2: false,
      message: '',
      allFlag: false
    }
  },
  methods: {
    calculation() {
      const obj = definition.selectCity({
        country: this.country
      })
      this.cityList = obj.cityList
      this.city = obj.city
    },
    async search() {
      if (this.language.length > 3) {
        this.languageFlag1 = true
      } else if(this.language.length === 0) {
        this.languageFlag2 = ture
      } else {
        this.languageFlag1 = false
        this.languageFlag2 = false
      }
      if (this.hobby.length > 3) {
        this.hobbyFlag1 = true
      } else if(this.hobby.length === 0) {
        this.hobbyFlag2 = ture
      } else {
        this.hobbyFlag1 = false
        this.hobbyFlag2 = false
      }
      if (this.languageFlag1 === false && this.languageFlag2 === false && this.hobbyFlag1 === false && this.hobbyFlag2 === false) {
        await this.$store.dispatch('getUsers', {username:this.username, belongs: this.belongs, country: this.country, city: this.city, language: this.language, hobby:this.hobby})
      }
    }
  },
  async mounted () {
    await this.$store.dispatch('signCheck')
    console.log('signCheckが完了した')
    await this.$store.dispatch('getUserNameLists')
    console.log('getUserNameListsが完了した')
    this.userNameList = this.$store.getters.getUserNameList
    console.log('this.userNameList')
    console.log(this.userNameList)
    const doc1 = this.userNameList[0]
    this.username = doc1[1]
    await this.$store.dispatch('getAllLists')
    console.log('getAllListsが完了した')
    this.languageList = this.$store.getters.getLanguageList
    console.log('this.languageList')
    console.log(this.languageList)
    for (let i = 0; i < 3; i++) {
      const data = this.languageList[i]
      this.language.push(data[1])
    }
    console.log('this.language')
    console.log(this.language)
    this.hobbyList = this.$store.getters.getHobbyList
    console.log(' this.hobbyList')
    console.log(this.hobbyList)
    for (let i = 0; i < 3; i++) {
      const data = this.hobbyList[i]
      this.hobby.push(data[1])
    }
    console.log('this.hobby')
    console.log(this.hobby)
    console.log('mounted完了')
  }
}

</script>