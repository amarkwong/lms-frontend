import axios from 'axios';
import React from 'react';
import {getCourses} from  './courses';
import {getUserRoleId} from  './auth';

const _transform = course=>{};

export function fetchStudents(){
    return axios.get(`/student`).then(
        response=>{
            // further process response.data
            return response.data;
        }
    )
}

export function fetchStudentById(id){
    return axios.get(`/student/${id}`).then(response=>(response.data));
}

export function createStudent(data){
    console.log("data ",data);
    return axios.post('/student',data);
}

export function updateStudent(id,data){
    console.log("call put, id is ",id);

    console.log("data ",data);
    return axios.put(`/student?id=${id}`,data);
}

export function fetchLecturersOfStudent(id){
    return axios.get(`/student/getMyLecturers/${id}`).then(response=>(response.data));
}

export function enrollCourse(courseId,studentId){
    return axios.post('/StudentEnroll',{'courseId':courseId,'student':studentId});
}

export function dropCourse(courseId,studentId){
    return axios.delete('/StudentEnroll?',{'courseId':courseId,'studentId':studentId});
}

// export function getCoursesOfStudent(){
//         var courses;
//         var rows;
//         courses= getCourses().then(response =>(response.data));
//         for (let i=0; i<courses.length; i++)
//         {
//             let course = courses.slice(i,i+1);
//             if ( isEnrolled(course.ID,getUserRoleId()) !== null) {
//               var enrollButton={'enroll': <MDBBtn color="default" rounded disable size="sm">Enroll</MDBBtn>}
//             }else{
//               enrollButton={'enroll': <MDBBtn color="default" rounded size="sm">Enroll</MDBBtn>}
//             }
//             let row={
//               'id': course.ID,
//               'courseName': course.Name,
//               'maxSeats': course.MaxStudent,
//               'availableSeats': course.AvailableSeats,
//               enrollButton, 
//             }
//             rows.push(row);
//           }
//         console.log('rows data',rows);
//     return rows;
// }
export function isEnrolled(courseId,studentId){
    return axios.get(`/student/isEnrolled/${courseId},${studentId}`).then(response=>(response.data)); 
}
