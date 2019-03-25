export const Types = {
    GET_STUDENTS_REQUEST: 'students/get_students_request',
    GET_STUDENTS_SUCCESS: 'students/get_students_success',
    DELETE_STUDENT_REQUEST: 'students/delete_student_request',
    CREATE_STUDENT_REQUEST: 'students/create_student_request',
    UPDATE_STUDENT_REQUEST: 'students/update_student_request',
    STUDENTS_ERROR: 'students/student_error'
  };
  
  export const getStudentsRequest = () => ({
      type: Types.GET_STUDENTS_REQUEST
  });
  
  export const getStudentsSuccess = ({items}) => ({
      type: Types.GET_STUDENTS_SUCCESS,
      payload: {
          items
      }
  });
  
  export const createStudentRequest = (student) => ({
      type: Types.CREATE_STUDENT_REQUEST,
      payload: student,
  });
  
  export const updateStudentRequest = (student) => ({
      type: Types.UPDATE_STUDENT_REQUEST,
      payload: student,
  });
  
  
  export const deleteStudentRequest = (studentId) => ({
      type: Types.DELETE_STUDENT_REQUEST,
      payload: {
          studentId
      }
  });
  
  export const studentsError = ({error}) => ({
      type: Types.STUDENTS_ERROR,
      payload: {
          error
      }
  });