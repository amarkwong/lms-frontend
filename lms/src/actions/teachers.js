export const Types = {
    GET_TEACHERS_REQUEST: 'teachers/get_teachers_request',
    GET_TEACHERS_SUCCESS: 'teachers/get_teachers_success',
    DELETE_TEACHER_REQUEST: 'teachers/delete_teacher_request',
    CREATE_TEACHER_REQUEST: 'teachers/create_teacher_request',
    UPDATE_TEACHER_REQUEST: 'teachers/update_teacher_request',
    TEACHERS_ERROR: 'teachers/teacher_error'
  };
  
  export const getTeachersRequest = () => ({
      type: Types.GET_TEACHERS_REQUEST
  });
  
  export const getTeachersSuccess = ({items}) => ({
      type: Types.GET_TEACHERS_SUCCESS,
      payload: {
          items
      }
  });
  
  export const createTeacherRequest = (teacher) => ({
      type: Types.CREATE_TEACHER_REQUEST,
      payload: teacher,
  });
  
  export const updateTeacherRequest = (teacher) => ({
      type: Types.UPDATE_TEACHER_REQUEST,
      payload: teacher,
  });
  
  
  export const deleteTeacherRequest = (teacherId) => ({
      type: Types.DELETE_TEACHER_REQUEST,
      payload: {
          teacherId
      }
  });
  
  export const teachersError = ({error}) => ({
      type: Types.TEACHERS_ERROR,
      payload: {
          error
      }
  });