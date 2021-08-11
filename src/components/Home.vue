<template>
  <div class="home">
    <main>
      <h1>Home</h1>
      <button class="btn-style2" @click="signOut">ログアウト</button>
      <p><router-link to="" class="link-style">登録へ</router-link></p>
      <p><router-link to="" class="link-style">検索へ</router-link></p>
    </main>
    <footer>
      <p>Copyright ©2019 ○○Inc. All rights reserved</p>
    </footer>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import router from '@/router'

export default {
  name: 'home',
  data () {
    return {
      username: '',
      wallet: 0,
      userId: '',
      modalName: '',
      modalWallet: 0,
      userList: [],
      showModal: false,
      showSendModal: false,
      sendingMoney: 0,
      destinationId: ''
    }
  },
  methods: {
    signOut () {
      this.$store.dispatch('signOut')
    }
  },
  mounted () {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('user.emailVerified')
      console.log(user.emailVerified)
      if (user.emailVerified) {
        console.log('メール認証済み')
      } else {
        console.log('メール認証未実施')
        router.push('/signin')
      }
    });
  }
}

</script>