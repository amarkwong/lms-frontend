import axios from 'axios';

const _transform = course=>{};

export function fetchLecturers(){
    return axios.get(`/lecturer`).then(
        response=>{
            // further process response.data
            return response.data;
        }
    )
}

export function fetchLecturerById(id){
    return axios.get(`/lecturer/${id}`).then(response=>(response.data));
}

export function fetchMyStudents(id){
    return axios.get(`/lecturer/myStudents/${id}`).then(response=>(response.data));
}

export function createLecturer(data){
    console.log("data ",data);
    return axios.post('/lecturer',data);
}

export function updateLecturer(id,data){
    console.log("call put, id is ",id);

    console.log("data ",data);
    return axios.put(`/lecturer?id=${id}`,data);
}
export function fetchStudentsOfLecturer(id){
    return axios.get(`/lecturer/getStudentsOfLecturer/${id}`).then(response=>(response.data));
}
export function fetchCoursesOfLecturer(id){
    return axios.get(`/lecturer/getStudentsOfLecturer/${id}`).then(response=>(response.data));
}

export function fetchStudentsAndCoursesOfLecturer(id){
    return axios.get(`/lecturer/getStudentsAndCoursesOfLecturer/${id}`).then(response=>(response.data));
}
export function isTeaching(courseId,lecturerId){
    return axios.get(`/lecturer/getTeachingState/${courseId},${lecturerId}`).then(response=>(response.data)); 
}