import axios from 'axios';

export function getCourses(){

    return axios.get(`/course`)
}

// export const getCourses = () => {
//     console.log('API fired');
//     return axios.get('/course')
//     .then(
//         res => {
//             return res.data
//         }
//     )
// }

export function fetchCourseById(id){
    return axios.get(`/course/${id}`).then(response=>(response.data));
}

export function createCourse(course){
    return axios.post('/course',course);
}

export function updateCourse(id,data){
    return axios.put(`/course/${id}`,data);
    // return axios.put(`/course?id=${id}`,data);
}

export const deleteCourse = (courseId) => {
    return axios.delete(`/course/${courseId}`);
};

// export function updateCourseById(id,data){
//     return axios.put(`/course/${id}`,data);
// }

export function fetchLecturersOfCourse(id){
    return axios.get(`/course/fetchLecturersOfCourse/${id}`).then(response=>(response.data));
}

export function fetchStudentsOfCourse(id){
    return axios.get(`/course/fetchStudentsOfCourse/${id}`).then(response=>(response.data));
}


// export const getUsers = () => {
//     return axios.get('/users', {
//         params: {
//             limit: 1000
//         }
//     });
// };

// export const createUser = ({firstName, lastName}) => {
//     return axios.post('/users', {
//         firstName,
//         lastName
//     });
// };

// export const deleteUser = (userId) => {
//     return axios.delete(`/users/${userId}`);
// };