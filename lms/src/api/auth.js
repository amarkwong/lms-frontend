// api/auth.js
import axios from 'axios';
import jwt_decode from 'jwt-decode';
export function logIn(username, password) {
  // we simulate the async request to login api here
  // replace it with real api call axios.post('api/login', {email, password})
  // when backend is implemented
  axios.post('login', { 'LoginName': username, 'Password': password }).then(result => {
    setTimeout(() => {
      var jwt = jwt_decode(result.data.Token);
      localStorage.setItem('userRole', jwt.role);
      localStorage.setItem('userId', jwt.unique_name);
      localStorage.setItem('curUser', result.data.Name);
      localStorage.setItem('sessionToken', result.data.Token);
      return result;
    }
      , 2000)
  })
    .catch(error => { console.error(error); throw error; });
}

//the web can only provide studentj signup
export function signUp(username, password) {
  //register new student
  console.log('API Signup fired');
  axios.post('/student', { 'Name': username });

  axios.post('/register', { 'Name': username, 'Password': password, 'Role': 'Student' }).then(result => {
    setTimeout(() => {
      localStorage.setItem('userRole', 'Student');
      localStorage.setItem('userId', result.data.ID);
      localStorage.setItem('curUser', result.data.Name);
      return result;
    }
      , 2000)
  })
    .catch(error => { console.error(error); throw error; });
}

//
export function logOut() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      localStorage.removeItem('sessionToken');
      localStorage.removeItem('curUser');
      resolve(null); // null means no user in local storage after log out
    }, 1000)
  })
}


export function isLoggedIn() {
  return localStorage.getItem('sessionToken');
}


export function getCurrentUser() {
  console.log('API, get cur user fired')
  const guest = {
    userId: 0,
    role: 'guest',
    username: 'unknown'
  }
  const loginStatus = isLoggedIn();
  console.log('API,', loginStatus)
  console.log('API,', guest)
  return loginStatus ? {
    userId: localStorage.getItem('userId'),
    role: localStorage.getItem('userRole'),
    username: localStorage.getItem('curUser'),
  } :
    guest
    ;
}

export function getRole() {
  if (isLoggedIn()) {
    return localStorage.getItem('userRole');
  } else {
    return 'Guest';
  }
}
export function getUserId() {
  if (isLoggedIn() !== null) {
    return localStorage.getItem('userId');
  } else {
    return '0';
  }
}

export function getUserRoleId() {
  if (isLoggedIn() !== null) {
    switch (getRole()) {
      case 'Student':
        var studentName = localStorage.getItem('curUser');
        return axios.get(`/student/getStudentByName?studentName=${studentName}`).then(response => (response.data.ID)).catch(0);
      case 'Lecturer':
        var lecturerName = localStorage.getItem('curUser');
        return axios.get(`/student/getLecturerByName?lecturerName=${lecturerName}`).then(response => (response.data.ID)).catch(0);
      case 'Admin':
        return '1';
      default:
        return '0';
    }
  }
}

export function checkValidUserName(username) {
  var result;
  axios.get(`/student/getStudentByName?studentName=${username}`).then(
    function (val) {
      console.log('result', val)
      result = false;
    }).catch(
      (reason) => {
        console.log('Handle rejected promise (' + reason + ') here.');
        result = true;
      });
  console.log(result, 'result');
  return result;
}


export function getVericode(phone) {
  // console.log('API get vericode fired', phone);
  // const curToken = getToken();
  // console.log('API vericode token', curToken.PromiseValue);
  const b = axios.post(`/Vericode/phone?phone=${phone}`)
    .then(response => (response.data))
  console.log('API vericode result', b);
  // const curSMS=getSMS(phone,'amark\'s test',curToken);
  // getToken().then(res => {console.log('API token',res);
  //   getSMS(phone,'amark test',res).then(response=>console.log('sms',response))});
  // console.log('API vericode SMS',curSMS);

  const curSMS=getSMS(phone,'amark\'s test');
  console.log('API vericode SMS',curSMS);
  return axios.get(`/vericode/phone?phone=${phone}`).then(response => (response.data));
}

const token = axios.create({
  baseURL: 'https://tapi.telstra.com/v2',
  timeout: 9000,
  async: true,
  withCredentials: false,
  crossdomain: true,
  headers: { 
  }
});
// data:{
//   grant_type: "client_credentials",
//   scope: "NSMS",
//   client_id: "cbqBzkfoif8gDQz1pqI09,lwL4cwcOJbo",
//   client_secret: "Edh0fht5rmlPAz6a",
// }
// grant_type: "client_credentials",

const sms = axios.create({
  baseURL: 'https://tapi.telstra.com/v2',
  timeout: 2000,
  withCredentials: false,
  crossdomain: true,
  // headers
  // headers: {
    // "Accept": "application/json",
    // "Authorization": "Bearer GGUsUxs07A6VxuDUOPX20o6at620",
    // "Content-Type": "application/x-www-form-urlencoded",
    // "Authorization": "Bearer GGUsUxs07A6VxuDUOPX20o6at620"
  // }
});
// axios.defaults.withCredentials = false;

export function getToken() {
  let result = token.post('/oauth/token',
    JSON.stringify({
      grant_type: "client_credentials",
      scope: "NSMS",
      client_id: "cbqBzkfoif8gDQz1pqI09lwL4cwcOJbo",
      client_secret: "Edh0fht5rmlPAz6a",
    })
  ).then(res => res.data.access_token) ;
  return result;
  // .then(res => {return res.access_token})
  // .catch(error => { console.error('api token', error); throw error; });
}

export function getSMS(phone, code) {
  let result = sms.post('/messages/sms',
  // JSON.stringify(
    {
    to:"61452580593",
    validity:60,
    priority:false,
    body:"This is a test msg from Telstra amark"
  },
  // ),
  {
    headers:
    {
      "Accept": "application/json",
      "Authorization": "Bearer QA4aJALMGbkiIeMIbjA0ETEGeGUp",
      "Content-Type": "application/x-www-form-urlencoded",
    }
      // 'Authorization':"Bearer GGUsUxs07A6VxuDUOPX20o6at620"}
  }
  // return sms.post('/messages/sms', 
  // JSON.stringify(
  //   {
  //   to:"61452580593",
  //   validity:60,
  //   priority:false,
  //   body:"This is a test msg from Telstra amark"
  // }
  // ),
  // {
  //   headers:
  //   {'Authorization':"Bearer GGUsUxs07A6VxuDUOPX20o6at620"}
  // }
  // {
  //   headers: 
  //   {'Authorization': "Bearer GGUsUxs07A6VxuDUOPX20o6at620"}
  // }
  // return sms.post('/messages/sms', {
  //   to: phone,
  //   validity: 60,
  //   priority: false,
  //   body: code
  // },
  // {
  // headers: {
  //   Authorization: `Bearer ${token}`,
  // }
  // }
  ).then(response => { console.log('sms response', response); }
  ).catch(error => { console.error('api sms', error); throw error; });
  return result;
}