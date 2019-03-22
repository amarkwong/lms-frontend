// api/auth.js
import axios from 'axios';
import jwt_decode from 'jwt-decode';
export function logIn(username, password) {
    // we simulate the async request to login api here
    // replace it with real api call axios.post('api/login', {email, password})
    // when backend is implemented
    //return new Promise((resolve, reject) => {
      console.log('calling login');
      console.log('username',username);
      console.log('password',password);
    var curData = axios.post('login',{'LoginName':username,'Password':password}).then(result => {
      setTimeout(() => {
        var jwt=jwt_decode(result.data.Token);
        localStorage.setItem('userRole', jwt.role);
        localStorage.setItem('userId', jwt.unique_name);
        localStorage.setItem('curUser', result.data.Name);
        localStorage.setItem('sessionToken', result.data.Token);
        console.log(localStorage.getItem('curUser'));
        console.log(localStorage.getItem('userRole'));
        console.log(localStorage.getItem('userId'));
        return result; }
        ,2000)})
    .catch(error => { console.error(error); throw error; });
      /*
      setTimeout(() => {
        // use browser localStorage to store current user info
        // so when we come back after closing the browser, we still know if user logged in before
        const curUser = {username, };
        localStorage.setItem('userRole', 'student');
        localStorage.setItem('userId', '1');
        localStorage.setItem('curUser', JSON.stringify(curUser))
        resolve(curUser);
        ;
      }, 2000)
    );

    return  axios.post('login',{'LoginName':username,'Password':password}).then((resolve, reject) => {
      setTimeout(() => {
        // use browser localStorage to store current user info
        // so when we come back after closing the browser, we still know if user logged in before
        const curUser = {username, };
        localStorage.setItem('sessionToken', 'token from server');
        localStorage.setItem('curUser', JSON.stringify(curUser))
        resolve(curUser);
      }, 2000)
    })
    */
  }

  export function signUp(username,password){
    console.log("SignUP");
    console.log("SignUP username",username);
    console.log("SignUP password",password);

    //register new student
    axios.post('/student',{'Name':username});

    axios.post('register',{'Name':username,'Password':password},'Role','Student').then(result => {
      setTimeout(() => {
        localStorage.setItem('userRole', 'Student');
        localStorage.setItem('userId', result.data.ID);
        localStorage.setItem('curUser', result.data.Name);
        console.log(localStorage.getItem('curUser'));
        console.log(localStorage.getItem('userRole'));
        console.log(localStorage.getItem('userId'));
        return result; }
        ,2000)})
    .catch(error => { console.error(error); throw error; });
  }
  
  export function logOut() {
    console.log(localStorage);
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

  export function getRole() {
    if (isLoggedIn()){
      console.log("log in? getitem");
      console.log(localStorage.getItem('userRole'));
      return localStorage.getItem('userRole');
      
      //return localStorage.getItem('userRole');
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