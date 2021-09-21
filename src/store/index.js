import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import router from "@/router";

Vue.use(Vuex);
const othersErrorMsg = "エラーが発生しました。";

const state = {
  username: "",
  mailaddress: "",
  password: "",
  userId: "",
  userList: "",
  languageList: "",
  hobbyList: "",
  belongs: "",
  country: "",
  city: "",
  language: [],
  hobby: [],
  message: "",
  matchUserList: [],
  userNameList: [],
  detailUser: [],
  errorMsg: "",
  registerFlg: false
};

const mutations = {
  setUserName(state, username) {
    state.username = username;
  },
  setMailAddress(state, mailaddress) {
    state.mailaddress = mailaddress;
  },
  setPassword(state, password) {
    state.password = password;
  },
  setUserId(state, userId) {
    state.userId = userId;
  },
  setLanguageList(state, languageList) {
    state.languageList = languageList;
  },
  setHobbyList(state, hobbyList) {
    state.hobbyList = hobbyList;
  },
  setBelongs(state, belongs) {
    state.belongs = belongs;
  },
  setCountry(state, country) {
    state.country = country;
  },
  setCity(state, city) {
    state.city = city;
  },
  setLanguage(state, language) {
    state.language = language;
  },
  setHobby(state, hobby) {
    state.hobby = hobby;
  },
  setMessage(state, message) {
    state.message = message;
  },
  setMatchUserList(state, matchUserList) {
    state.matchUserList = matchUserList;
  },
  setUserNameList(state, userNameList) {
    state.userNameList = userNameList;
  },
  setDetailUser(state, detailUser) {
    state.detailUser = detailUser;
  },
  setErrorMsg(state, errorMsg) {
    state.errorMsg = errorMsg;
  },
  setRegisterFlg(state, registerFlg) {
    state.registerFlg = registerFlg;
  }
};

const getters = {
  getUserName: state => {
    return state.username;
  },
  getLanguageList: state => {
    return state.languageList;
  },
  getHobbyList: state => {
    return state.hobbyList;
  },
  getBelongs: state => {
    return state.belongs;
  },
  getCountry: state => {
    return state.country;
  },
  getCity: state => {
    return state.city;
  },
  getLanguage: state => {
    return state.language;
  },
  getHobby: state => {
    return state.hobby;
  },
  getMessage: state => {
    return state.message;
  },
  getMatchUserList: state => {
    return state.matchUserList;
  },
  getUserNameList: state => {
    return state.userNameList;
  },
  getDetailUser: state => {
    return state.detailUser;
  },
  getErrorMsg: state => {
    return state.errorMsg;
  },
  getRegisterFlg: state => {
    return state.registerFlg;
  }
};

const actions = {
  async signUp({ commit }, { username, mailaddress, password }) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(mailaddress, password)
      .then(async response => {
        const user = response.user;
        await firebase
          .firestore()
          .collection("users")
          .add({
            name: username,
            email: user.email,
            password: password
          })
          .then(async doc => {
            //DB追加に成功しました
            await firebase
              .auth()
              .currentUser.updateProfile({
                displayName: username
              })
              .then(() => {
                //ユーザ名登録に成功しました
                commit("setUserName", username);
                commit("setMailAddress", mailaddress);
                commit("setPassword", password);
                router.push("/home");
              })
              .catch(error => {
                commit("setErrorMsg", othersErrorMsg);
              });
          })
          .catch(error => {
            commit("setErrorMsg", othersErrorMsg);
          });
      })
      .catch(error => {
        if (error.code === "auth/email-already-in-use") {
          commit("setErrorMsg", "このメールアドレスは既に登録されています。");
        } else if (error.code === "auth/invalid-email") {
          commit("setErrorMsg", "無効なメールアドレスです。");
        } else if (error.code === "auth/operation-not-allowed") {
          commit(
            "setErrorMsg",
            "電子メール/パスワードアカウントが有効になっていません。"
          );
        } else if (error.code === "auth/weak-password") {
          commit("setErrorMsg", "パスワードは6文字以上にしてください。");
        } else {
          commit("setErrorMsg", othersErrorMsg);
        }
      });
  },
  async signIn({ commit }, { mailaddress, password }) {
    await firebase
      .auth()
      .signInWithEmailAndPassword(mailaddress, password)
      .then(user => {
        const userObject = user.user;
        commit("setUserName", userObject.displayName);
        commit("setMailAddress", mailaddress);
        commit("setPassword", password);
        router.push("/home");
      })
      .catch(error => {
        if (error.code === "auth/invalid-email") {
          commit("setErrorMsg", "無効なメールアドレスです。");
        } else if (error.code === "auth/user-disabled") {
          commit(
            "setErrorMsg",
            "指定された電子メールに対応するユーザーが無効になっています。"
          );
        } else if (error.code === "auth/user-not-found") {
          commit(
            "setErrorMsg",
            "指定された電子メールに対応するユーザーがいません。"
          );
        } else if (error.code === "auth/wrong-password") {
          commit(
            "setErrorMsg",
            "入力したパスワードが、登録したものと異なります。"
          );
        } else {
          commit("setErrorMsg", othersErrorMsg);
        }
      });
  },
  async signOut({ commit }) {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        //ログアウト成功！
        commit("setUserName", "");
        commit("setMailAddress", "");
        commit("setPassword", "");
      })
      .catch(error => {
        commit("setErrorMsg", othersErrorMsg);
      });
  },

  async getUserList({ commit }) {
    await firebase
      .firestore()
      .collection("users")
      .get()
      .then(query => {
        //ユーザリストの参照に成功しました
        const buff = [];
        query.forEach(doc => {
          const data = doc.data();
          buff.push([doc.id, data.name, data.email, data.password]);
        });
        const createUserArray = buff.filter(
          doc => doc[2] === state.mailaddress
        );
        const createUser = createUserArray[0];
        commit("setUserId", createUser[0]);
      })
      .catch(error => {
        commit("setErrorMsg", othersErrorMsg);
      });
  },
  async getAllLists({ commit }) {
    await firebase
      .firestore()
      .collection("development_languages")
      .get()
      .then(query => {
        //開発言語テーブルの参照に成功しました
        const buff = [];
        query.forEach(doc => {
          const data = doc.data();
          buff.push([doc.id, data.language]);
        });
        commit("setLanguageList", buff);
      })
      .catch(error => {
        commit("setErrorMsg", othersErrorMsg);
      });
    await firebase
      .firestore()
      .collection("hobbies")
      .get()
      .then(query => {
        //趣味テーブルの参照に成功しました
        const buff = [];
        query.forEach(doc => {
          const data = doc.data();
          buff.push([doc.id, data.hobby]);
        });
        commit("setHobbyList", buff);
      })
      .catch(error => {
        commit("setErrorMsg", othersErrorMsg);
      });
  },
  async updateInformation(
    { commit },
    { belongs, country, city, language, hobby, message }
  ) {
    //これからupdateInformation実施
    const userDoc = firebase
      .firestore()
      .collection("users")
      .doc(state.userId);
    await userDoc
      .update({
        belongs: belongs,
        country: country,
        city: city,
        language: language,
        hobby: hobby,
        message: message
      })
      .then(() => {
        //updateが完了しました
        router.push("/updateInformation");
      })
      .catch(error => {
        commit("setErrorMsg", othersErrorMsg);
      });
  },
  async getUserNameLists({ commit }) {
    await firebase
      .firestore()
      .collection("users")
      .get()
      .then(query => {
        //ユーザリストの参照に成功しました
        const buff = [];
        query.forEach(doc => {
          const data = doc.data();
          buff.push([doc.id, data.name]);
        });
        commit("setUserNameList", buff);
      })
      .catch(error => {
        commit("setErrorMsg", othersErrorMsg);
      });
  },
  async getUsers(
    { commit },
    { username, belongs, country, city, language, hobby }
  ) {
    await firebase
      .firestore()
      .collection("users")
      .get()
      .then(query => {
        //usersテーブルの参照に成功しました
        const buff = [];
        query.forEach(doc => {
          const data = doc.data();
          buff.push([
            data.name,
            data.email,
            data.belongs,
            data.country,
            data.city,
            data.language,
            data.hobby,
            data.message
          ]);
        });
        //マッチリストの作成
        buff.forEach(doc => {
          const matchList = [];
          if (doc[0] === username) {
            matchList.push("名前");
          }
          if (doc[2] === belongs) {
            matchList.push("所属");
          }
          if (doc[3] === country) {
            matchList.push("出身（国）");
          }
          if (doc[4] === city) {
            matchList.push("出身（都市）");
          }
          const languageDiff = doc[5].filter(
            item => language.indexOf(item) !== -1
          );
          if (languageDiff.length > 0) {
            matchList.push("言語");
          }
          const hobbyDiff = doc[6].filter(item => hobby.indexOf(item) !== -1);
          if (hobbyDiff.length > 0) {
            matchList.push("趣味");
          }
          doc.push(matchList);
        });
        //マッチユーザリスト作成
        const matchUserList = buff.filter(doc => {
          if (doc[8].length > 0) {
            return true;
          } else {
            return false;
          }
        });
        commit("setMatchUserList", matchUserList);
        //各項目の格納
        commit("setUserName", username);
        commit("setBelongs", belongs);
        commit("setCountry", country);
        commit("setCity", city);
        commit("setLanguage", language);
        commit("setHobby", hobby);
        router.push("/result");
      })
      .catch(error => {
        commit("setErrorMsg", othersErrorMsg);
      });
  }
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});
