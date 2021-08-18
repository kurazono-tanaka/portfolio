'use strict';

//languageの初期値
const language = []

//都市の選択肢の編集
const selectCity = ({ country }) => {
  let _cityList = [];
  let _city = '';
  switch (country) {
    case '日本':
      _cityList = ['東京','京都']
      _city = '東京';
      break;
    case 'アメリカ':
      _cityList = ['ニューヨーク','ロザンゼルス']
      _city = 'ニューヨーク';
      break;
    case '中国':
      _cityList = ['北京','上海']
      _city = '北京';
      break;
    case 'インド':
      _cityList = ['デリー','ムンバイ']
      _city = 'デリー';
      break;
    case 'その他':
      _cityList = ['その他']
      _city = 'その他';
      break;
  }
  console.log('_cityListの中身')
  console.log(_cityList)
  console.log('_cityの中身')
  console.log(_city)
  return {
    cityList: _cityList,
    city: _city
  };
};

export default {selectCity};
