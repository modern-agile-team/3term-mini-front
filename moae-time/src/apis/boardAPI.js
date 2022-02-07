import axios from 'axios';

axios.post(`${ENDPOINT}/register/school`, {
  school: '인덕',
});

axios.post(`${ENDPOINT}/register/Notice`, {
  notice: [1, 2, 3],
  // 한결
});

axios.post(`${ENDPOINT}/register/'userInfo'`, {
  name: '수형',
});

axios.post(`${ENDPOINT}/register/'userInfo'`, {
  name: '한결',
});

axios.post(`${ENDPOINT}/register/Notice`, {
  mail: 'E_Mail',
  notice: [5, 2, 3],
  // 수형
});
