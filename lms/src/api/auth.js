// api/auth.js
import axios from 'axios';
import jwt_decode from 'jwt-decode';
export function logIn(username, password) {
    // we simulate the async request to login api here
    // replace it with real api call axios.post('api/login', {email, password})
    // when backend is implemented
    axios.post('login',{'LoginName':username,'Password':password}).then(result => {
      setTimeout(() => {
        var jwt=jwt_decode(result.data.Token);
        localStorage.setItem('userRole', jwt.role);
        localStorage.setItem('userId', jwt.unique_name);
        localStorage.setItem('curUser', result.data.Name);
        localStorage.setItem('sessionToken', result.data.Token);
        return result; }
        ,2000)})
    .catch(error => { console.error(error); throw error; });
  }

  //the web can only provide studentj signup
  export function signUp(username,password){
    //register new student
    console.log('API Signup fired' );
    axios.post('/student',{'Name':username});

    axios.post('/register',{'Name':username,'Password':password,'Role':'Student'}).then(result => {
      setTimeout(() => {
        localStorage.setItem('userRole', 'Student');
        localStorage.setItem('userId', result.data.ID);
        localStorage.setItem('curUser', result.data.Name);
        return result; }
        ,2000)})
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


  export function getCurrentUser (){
    const guest = {
      userId: 0,
      role: 'guest',
      username: 'unknown'
    }
    const loginStatus = isLoggedIn();
    return loginStatus? {
      userId: localStorage.getItem('userId'),
      role:localStorage.getItem('userRole'),
      username:localStorage.getItem('curUser'),
    }: 
    guest 
    ;
  }

  export function getRole() {
    if (isLoggedIn()){
      return localStorage.getItem('userRole');
    }else {
      return 'Guest';
    }
  }
  export function getUserId(){ if (isLoggedIn()!==null){
      return localStorage.getItem('userId');
    }else {
      return '0';
    }
  }

  export function getUserRoleId(){
    if (isLoggedIn()!==null){
      switch (getRole()){
        case 'Student':
          var studentName = localStorage.getItem('curUser');
          return axios.get(`/student/getStudentByName?studentName=${studentName}`).then(response=>(response.data.ID)).catch(0);
        case 'Lecturer':
          var lecturerName = localStorage.getItem('curUser');
          return axios.get(`/student/getLecturerByName?lecturerName=${lecturerName}`).then(response=>(response.data.ID)).catch(0);
        case 'Admin':
          return '1';
        default:
          return '0';
      }
    }
  }

  export function checkValidUserName(username){
    var result;
    axios.get(`/student/getStudentByName?studentName=${username}`).then( 
    function(val) {
      console.log('result',val )
      result = false;
  }).catch(
    (reason) => {
      console.log('Handle rejected promise ('+reason+') here.');
      result = true ;
  });
    console.log(result,'result');
    return result;
  }