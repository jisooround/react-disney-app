import axios from 'axios';

// 자주 사용하는 값을 instance로 저장
const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
  params: {
    api_key: "b18e798ff377ef49f1c335283e7c43d6",
    language: "ko-KR",
  }
})

export default instance;