<template>
  <div class="completion">
    <main>
      <h1>認証が完了しました</h1>
      <button class="btn-style2">
        <router-link to="/home" class="button-kigou">ホーム画面へ</router-link>
      </button>
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
  name: 'completion',
  mounted () {
    console.log('mounted () 開始')
    function getParameterByName(name) {
      console.log('window.location.search')
      console.log(window.location.search)
      const match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
      return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }
    document.addEventListener('DOMContentLoaded', () => {
      console.log('addEventListener開始')
      const mode = getParameterByName('mode');
      const actionCode = getParameterByName('oobCode');
      const continueUrl = getParameterByName('continueUrl');
      const lang = getParameterByName('lang') || 'en';
      const auth = firebase.auth();
      console.log('mode')
      console.log(mode)
      switch (mode) {
        case 'resetPassword':
          // Display reset password handler and UI.
          handleResetPassword(auth, actionCode, continueUrl, lang);
          break;
        case 'recoverEmail':
          // Display email recovery handler and UI.
          handleRecoverEmail(auth, actionCode, lang);
          break;
        case 'verifyEmail':
          // Display email verification handler and UI.
          handleVerifyEmail(auth, actionCode, continueUrl, lang);
          break;
        default:
          // Error: invalid mode.
          console.log('無効なモード')
      }
    }, false)
    function handleVerifyEmail(auth, actionCode, continueUrl, lang) {
      auth.applyActionCode(actionCode).then((resp) => {
        console.log('メールアドレスが確認されました。')
      }).catch((error) => {
        console.log(`andleVerifyEmailでエラー発生：${error}`)
      })
    }
    // async function verificationEmail () {
    //   // アクションコードの確認
    //   await firebase.autn().applyActionCode(oobCode)
    // }
    // // ローカルストレージに保存してあるメールアドレスを取得
    // const email = window.localStorage.getItem("emailForSignIn");
    // console.log('emailの中身')
    // console.log(email)
    // console.log('window.location.hrefの中身')
    // console.log(window.location.href)
    // if(firebase.auth().isSignInWithEmailLink(window.location.href)) {
    //     firebase.auth().signInWithEmailLink(email, window.location.href).then((result) => {
    //         // ログイン完了
    //         // ローカルに保存したメールアドレスを削除
    //         window.localStorage.removeItem("emailForSignIn");
    //         console.log('メール認証成功')
    //     }).catch((error) => {
    //         // ローカルに保存したメールアドレスを削除
    //         window.localStorage.removeItem("emailForSignIn");
    //         console.log(`signInWithEmailLinkでエラー発生：${error}`)
    //     });
    // } else {
    //     // ローカルに保存したメールアドレスを削除
    //     window.localStorage.removeItem("emailForSignIn");
    //     console.log('メールリンクからの遷移ではない')
    // }
  }
}
</script>