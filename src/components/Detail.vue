<template>
  <div class="detail">
    <main>
      <h1>検索結果（詳細）</h1>
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
      </ul>
      <button class="btn-style1" @click="result">検索結果画面に戻る</button>
    </main>
    <footer>
      <p>Copyright ©2019 ○○Inc. All rights reserved</p>
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