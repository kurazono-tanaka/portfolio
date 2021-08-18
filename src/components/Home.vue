<template>
  <div class="home">
    <main>
      <h1>Home</h1>
      <button class="btn-style2" @click="signOut">ログアウト</button>
      <p><router-link to="/register" class="link-style">登録へ</router-link></p>
      <p><router-link to="/search" class="link-style">検索へ</router-link></p>
    </main>
    <footer>
      <p>Copyright ©2019 ○○Inc. All rights reserved</p>
    </footer>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
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
    this.username = this.$store.getters.getUserName     
    firebase.auth().onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        console.log('user.emailVerified')
        console.log(user.emailVerified)
        console.log('login')
        console.log('メール認証済み')
        if(this.username === '') {
          //メールリンクから遷移した場合
          console.log('メールリンクから遷移した場合')
          this.$store.commit('setUserName', user.displayName);
        }
      } else if(user && !user.emailVerified) {
        console.log('user.emailVerified')
        console.log(user.emailVerified)
        console.log('logout')
        console.log('メール認証未実施')
        router.push('/signin')
      } else {
        //ログアウトのリロード時
        console.log('user')
        console.log(user)
        console.log('ログアウトのリロード時')
        console.log('logout')
      }
      // if (user.emailVerified) {
      //   console.log('メール認証済み')
      // } else {
      //   console.log('メール認証未実施')
      //   router.push('/signin')
      // }
    })
    // this.username = this.$store.getters.getUserName
    // if(this.username === '') {
    //   //メールリンクから遷移した場合
    //   firebase.auth().onAuthStateChanged(user => {
    //     if (user) {
    //       console.log('login')
    //       this.$store.commit('setUserName', user.displayName);
    //     } else {
    //       console.log('logout')
    //     }
    //   })
    // }
  }
}

</script>