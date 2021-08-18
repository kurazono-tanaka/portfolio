<template>
  <div class="updateInformation">
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