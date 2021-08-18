<template>
  <div class="result">
    <main>
      <h1>ユーザ情報検索</h1>
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
      </ul>
      <h1>検索結果</h1>
      <p>{{number}}名のユーザが検索されました。</p>
      <ul>
        <li v-for="(doc, index) in matchUserList" :key="index">
          <div>
            <p>お名前</p>
            <p>{{doc[0]}}</p>
          </div>
          <div>
            <p>該当項目</p>
            <ul>
              <li v-for="(item, index) in doc[8]" :key="index">{{item}}</li>
            </ul>
            <button class="btn-style1" @click="detail(doc[1])">詳細を見る</button>
          </div>
        </li>
      </ul>
      <button class="btn-style1" @click="search">ユーザ情報検索画面に戻る</button>
    </main>
    <footer>
      <p>Copyright ©2019 ○○Inc. All rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Result',
  data () {
    return {
      matchUserList: [],
      number: 0,
      username: '',
      belongs:'',
      country:'',
      city:'',
      language:'',
      hobby:''
    }
  },
  methods: {
    detail(email) {
      console.log('detailの引数email')
      console.log(email)
      const detailUserList = this.matchUserList.filter(doc => doc[1] === email)
      if(detailUserList.length === 1) {
        console.log('emailは一意')
      } else {
        console.log('エラー：emailが一意でない')
      }
      const detailUser = detailUserList[0]
      console.log('detailUserの中身')
      console.log(detailUser)
      this.$store.commit('setDetailUser', detailUser)
      this.$router.push('/detail')
    },
    search() {
      this.$router.push('/search')
    }
  },
  async mounted () {
    this.matchUserList = this.$store.getters.getMatchUserList
    this.number = this.matchUserList.length
    this.username = this.$store.getters.getUserName
    this.belongs = this.$store.getters.getBelongs
    this.country = this.$store.getters.getCountry
    this.city = this.$store.getters.getCity
    this.language = this.$store.getters.getLanguage
    this.hobby = this.$store.getters.getHobby
    console.log('検索結果画面のmounted完了')
  }
}
</script>