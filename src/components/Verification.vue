<template>
  <div class="verification">
    <main>
      <h1>ユーザ情報登録確認</h1>
      <ul>
        <li>
          <p>お名前</p>
          <p>{{username}}</p>
        </li>
        <li>
          <p>所属</p>
          <p>{{belongs}}</p>
        </li>
        <li>
          <p>出身（国）</p>
          <p>{{country}}</p>
        </li>
        <li>
          <p>出身（都市）</p>
          <p>{{city}}</p>
        </li>
        <li>
          <p>経験のある開発言語</p>
          <ul>
            <li v-for="(item, index) in language" :key="index">{{item}}</li>
          </ul>
        </li>
        <li>
          <p>趣味</p>
          <ul>
            <li v-for="(item, index) in hobby" :key="index">{{item}}</li>
          </ul>
        </li>
        <li>
          <p>メンバーに対して一言</p>
          <p>{{message}}</p>
        </li>
        <!-- <li>
          <p>ユーザアイコン</p>
          <button @click="updateFile">ファイルの添付</button>
        </li> -->
      </ul>
      <button class="btn-style1" @click="register">ユーザ情報登録画面に戻る</button>
      <button class="btn-style1" @click="updateInformation">登録する</button>
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
  name: 'verification',
  data () {
    return {
      username: '',
      belongs: '',
      country: '',
      city: '',
      language: [],
      hobby: [],
      message: ''
    }
  },
  methods: {
    register() {
      this.$router.push('/register')
    },
    async updateInformation() {
      await this.$store.dispatch('updateInformation', {belongs: this.belongs, country: this.country, city: this.city, language: this.language, hobby: this.hobby, message:this.message})
    }


  },
   mounted () {
    this.username = this.$store.getters.getUserName
    this.belongs = this.$store.getters.getBelongs
    this.country = this.$store.getters.getCountry
    this.city = this.$store.getters.getCity
    this.language = this.$store.getters.getLanguage
    this.hobby = this.$store.getters.getHobby
    this.message = this.$store.getters.getMessage
    console.log('ユーザ情報登録確認のmounted完了')
  }
}

</script>